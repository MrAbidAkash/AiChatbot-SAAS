import { NextRequest, NextResponse } from "next/server";
import { executeBkashPayment } from "@/lib/bkash";
import { updatePaymentRecord, findPaymentRecord } from "@/lib/payment-db";
import { sendCourseEmail } from "@/lib/email-service";

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
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/payment-fail?reason=${status}`,
      );
    }

    const paymentRecord = await findPaymentRecord(paymentID);
    if (!paymentRecord) {
      throw new Error("Payment record not found");
    }

    const executeResponse = await executeBkashPayment(paymentID);
    console.log("bKash execute response:", executeResponse);

    if (executeResponse.transactionStatus === "Completed") {
      await updatePaymentRecord(paymentID, {
        amount: parseFloat(executeResponse.amount) || 0,
        currency: executeResponse.currency || "BDT",
        merchantInvoiceNo: executeResponse.merchantInvoiceNumber,
        transactionStatus: "Completed",
        trxID: executeResponse.trxID,
        user: executeResponse.customerMsisdn || "",
      });

    //   await sendCourseEmail({
    //     to: paymentRecord.customerInfo.email,
    //     paymentID,
    //   });

    //   const orderId = `purchase_${paymentID}_${executeResponse.trxID}`;
    //   const purchaseType =
    //     paymentRecord.payerReference === "partial" ? "partial" : "full";

    //   const facebookEventData = {
    //     platform: "facebook",
    //     event_name: "Purchase",
    //     event_id: orderId,
    //     customer_info: {
    //       name: paymentRecord.customerInfo.name,
    //       phone: paymentRecord.customerInfo.phone,
    //       address: paymentRecord.customerInfo.address,
    //       email: paymentRecord.customerInfo.email,
    //     },
    //     currency: "BDT",
    //     value: paymentRecord.amount / 2,
    //     custom_data: {
    //       purchase_type: purchaseType,
    //       content_ids: [paymentRecord._id],
    //       content_type: "product",
    //       productPrice: paymentRecord.amount / 2,
    //     },
    //   };

    //   try {
    //     await fetch(
    //       `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/api/fb-conversion`,
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(facebookEventData),
    //       },
    //     );
    //     console.log("Facebook conversion event sent");
    //   } catch (fbError) {
    //     console.error("Failed to send Facebook conversion event:", fbError);
    //   }

      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/payment-success?paymentID=${paymentID}`,
      );
    }

    await updatePaymentRecord(paymentID, {
      transactionStatus: executeResponse.transactionStatus || "Failed",
      amount: parseFloat(executeResponse.amount) || 0,
      currency: executeResponse.currency || "BDT",
      merchantInvoiceNo: executeResponse.merchantInvoiceNumber,
    });

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/payment-fail?paymentID=${paymentID}`,
    );
  } catch (error) {
    console.error("bKash callback error:", error);

    const url = new URL(req.url);
    const paymentID = url.searchParams.get("paymentID");

    if (paymentID) {
      try {
        await updatePaymentRecord(paymentID, {
          transactionStatus: "Error",
        });
      } catch (updateError) {
        console.error("Failed to update payment record:", updateError);
      }
    }

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/payment-fail?reason=server_error`,
    );
  }
}
