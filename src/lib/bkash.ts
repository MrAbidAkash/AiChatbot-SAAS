const BASE_URL = "https://tokenized.pay.bka.sh/v1.2.0-beta";

export interface BkashTokenResponse {
  id_token: string;
  token_type: string;
  expires_in: number;
}

export interface BkashCreatePaymentRequest {
  amount: number;
  callbackURL: string;
  payerReference?: string;
  customerInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
}

export interface BkashCreatePaymentResponse {
  paymentID: string;
  paymentCreateTime: string;
  transactionStatus: string;
  amount: string;
  currency: string;
  intent: string;
  merchantInvoiceNumber: string;
  bkashURL: string;
  statusMessage: string;
  statusCode: string;
}

export interface BkashExecuteResponse {
  paymentID: string;
  transactionStatus: string;
  trxID: string;
  amount: string;
  currency: string;
  merchantInvoiceNumber: string;
  customerMsisdn: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface PaymentRecord {
  _id?: string;
  paymentID: string;
  amount: number;
  transactionStatus: string;
  payerReference?: string;
  customerInfo: CustomerInfo;
  trxID?: string;
  currency?: string;
  merchantInvoiceNo?: string;
  user?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export async function grantToken(): Promise<string> {
  try {
    const response = await fetch(`${BASE_URL}/tokenized/checkout/token/grant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        username: process.env.BK_USERNAME!,
        password: process.env.BK_PASSWORD!,
      },
      body: JSON.stringify({
        app_key: process.env.BK_APP_KEY!,
        app_secret: process.env.BK_APP_SECRET!,
      }),
    });

    if (!response.ok) {
      throw new Error(`bKash token grant failed: ${response.statusText}`);
    }

    const data: BkashTokenResponse = await response.json();
    return data.id_token;
  } catch (error) {
    console.error("bKash token grant error:", error);
    throw error;
  }
}

export async function createBkashPayment(
  paymentData: BkashCreatePaymentRequest,
): Promise<BkashCreatePaymentResponse> {
  const idToken = await grantToken();

  // Use customer phone or email as payerReference, or a default value
  const payerReference =
    paymentData.payerReference ||
    paymentData.customerInfo?.phone ||
    paymentData.customerInfo?.email ||
    "customer";

  const response = await fetch(`${BASE_URL}/tokenized/checkout/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: idToken,
      "x-app-key": process.env.BK_APP_KEY!,
    },
    body: JSON.stringify({
      mode: "0011",
      amount: paymentData.amount.toString(),
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: `INV_${Date.now()}`,
      callbackURL: paymentData.callbackURL,
      payerReference,
    }),
  });

  if (!response.ok) {
    throw new Error(`bKash payment creation failed: ${response.statusText}`);
  }

  const data: BkashCreatePaymentResponse = await response.json();

  if (data.statusMessage !== "Successful") {
    throw new Error(data.statusMessage || "Payment creation failed");
  }

  return data;
}

export async function executeBkashPayment(
  paymentID: string,
): Promise<BkashExecuteResponse> {
  const idToken = await grantToken();

  const response = await fetch(`${BASE_URL}/tokenized/checkout/execute`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: idToken,
      "x-app-key": process.env.BK_APP_KEY!,
    },
    body: JSON.stringify({ paymentID }),
  });

  if (!response.ok) {
    throw new Error(`bKash payment execution failed: ${response.statusText}`);
  }

  return await response.json();
}
