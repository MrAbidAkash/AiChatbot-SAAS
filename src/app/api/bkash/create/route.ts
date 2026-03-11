import { NextRequest, NextResponse } from "next/server";
import { createBkashPayment, BkashCreatePaymentRequest } from "@/lib/bkash";
import { savePaymentRecord } from "@/lib/payment-db";

export async function POST(req: NextRequest) {
  try {
    console.log("Creating bKash payment...");

    const paymentData: BkashCreatePaymentRequest = await req.json();

    console.log("Payment data:", paymentData);

    const bkashResponse = await createBkashPayment(paymentData);

    console.log("bKash response:", bkashResponse);

    const paymentRecord = await savePaymentRecord({
      paymentID: bkashResponse.paymentID,
      amount: parseFloat(bkashResponse.amount),
      transactionStatus: bkashResponse.transactionStatus || "Pending",
      payerReference: paymentData.payerReference || "",
      customerInfo: paymentData.customerInfo,
    });

    console.log("Payment record saved:", paymentRecord);

    return NextResponse.json(bkashResponse);
  } catch (error) {
    console.error("bKash payment creation error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Payment creation failed",
      },
      { status: 500 },
    );
  }
}
