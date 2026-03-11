import { NextRequest, NextResponse } from "next/server";
import { executeBkashPayment } from "@/lib/bkash";
import { findPaymentRecord, updatePaymentRecord } from "@/lib/payment-db";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    console.log("FULL URL:", url.toString());
    console.log("SEARCH PARAMS:", url.searchParams.toString());

    const paymentID = url.searchParams.get("paymentID");
    const status = url.searchParams.get("status");
    const signature = url.searchParams.get("signature");
    const apiVersion = url.searchParams.get("apiVersion");

    console.log({
      paymentID,
      status,
      signature,
      apiVersion,
    });

    if (!paymentID || status !== "success") {
      const failUrl = new URL(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/checkout`,
      );
      failUrl.searchParams.set("payment", "failed");
      failUrl.searchParams.set("reason", status || "unknown");
      if (paymentID) {
        failUrl.searchParams.set("paymentID", paymentID);
      }

      return NextResponse.redirect(failUrl.toString());
    }

    // Find payment record in database
    console.log("Finding payment record for:", paymentID);
    const paymentRecord = await findPaymentRecord(paymentID);

    if (!paymentRecord) {
      console.error("Payment record not found for:", paymentID);
      const failUrl = new URL(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/checkout`,
      );
      failUrl.searchParams.set("payment", "failed");
      failUrl.searchParams.set("reason", "record_not_found");
      failUrl.searchParams.set("paymentID", paymentID);

      return NextResponse.redirect(failUrl.toString());
    }

    const executeResponse = await executeBkashPayment(paymentID);
    console.log("bKash execute response:", executeResponse);

    if (executeResponse.transactionStatus === "Completed") {
      // Update payment record in database
      try {
        const updatedRecord = await updatePaymentRecord(paymentID, {
          transactionStatus: executeResponse.transactionStatus,
          trxID: executeResponse.trxID,
          currency: "BDT",
          payerReference: executeResponse.customerMsisdn,
        });
        console.log("Payment record updated as completed:", updatedRecord);
      } catch (dbError) {
        console.error("Failed to update payment record:", dbError);
        // Continue with the response even if DB update fails
      }

      // TODO: Send confirmation email when email service is configured
      // await sendCourseEmail({
      //   to: paymentRecord.customerInfo.email,
      //   paymentID,
      // });

      // Redirect to checkout success page with payment details
      const successUrl = new URL(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/checkout/success`,
      );
      successUrl.searchParams.set("paymentID", paymentID);
      successUrl.searchParams.set("trxID", executeResponse.trxID);
      successUrl.searchParams.set("amount", executeResponse.amount);
      successUrl.searchParams.set("paymentMethod", "bKash");
      successUrl.searchParams.set("status", "success");
      successUrl.searchParams.set("plan", "starter"); // You might want to get this from the payment record

      return NextResponse.redirect(successUrl.toString());
    }

    // Update payment record as failed in database
    try {
      const updatedRecord = await updatePaymentRecord(paymentID, {
        transactionStatus: "Failed",
      });
      console.log("Payment record updated as failed:", updatedRecord);
    } catch (dbError) {
      console.error("Failed to update payment record:", dbError);
      // Continue with the response even if DB update fails
    }

    const failUrl = new URL(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/checkout`,
    );
    failUrl.searchParams.set("payment", "failed");
    failUrl.searchParams.set("reason", "transaction_failed");
    failUrl.searchParams.set("paymentID", paymentID);

    return NextResponse.redirect(failUrl.toString());
  } catch (error) {
    console.error("bKash callback error:", error);

    const url = new URL(req.url);
    const paymentID = url.searchParams.get("paymentID");

    if (paymentID) {
      // Update payment record as error in database
      try {
        await updatePaymentRecord(paymentID, {
          transactionStatus: "Error",
        });
        console.log("Payment record updated as error for:", paymentID);
      } catch (dbError) {
        console.error("Failed to update payment record as error:", dbError);
      }
    }

    return NextResponse.redirect(
      new URL(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/checkout?payment=failed&reason=server_error`,
      ).toString(),
    );
  }
}
