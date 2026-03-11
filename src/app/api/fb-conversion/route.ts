import { NextRequest, NextResponse } from "next/server";

interface FacebookConversionData {
  platform: string;
  event_name: string;
  event_id: string;
  customer_info: {
    name?: string;
    phone?: string;
    address?: string;
    email?: string;
  };
  currency: string;
  value: number;
  custom_data?: {
    purchase_type?: string;
    content_ids?: string[];
    content_type?: string;
    product_name?: string;
    productPrice?: number;
  };
}

export async function POST(req: NextRequest) {
  try {
    const data: FacebookConversionData = await req.json();

    console.log("Facebook conversion event received:", data);

    if (!process.env.FB_ACCESS_TOKEN || !process.env.FB_PIXEL_ID) {
      console.warn(
        "Facebook credentials not configured, skipping conversion event",
      );
      return NextResponse.json({
        success: true,
        message: "Event logged locally",
      });
    }

    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ip = forwarded
      ? forwarded.split(",")[0].trim()
      : realIp || "127.0.0.1";

    const conversionData = {
      event_name: data.event_name,
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: process.env.NEXT_PUBLIC_AUTH_BASE_URL,
      user_data: {
        client_ip_address: ip,
        client_user_agent: req.headers.get("user-agent") || "",
        em: data.customer_info.email
          ? hash(data.customer_info.email.toLowerCase())
          : undefined,
        fn: data.customer_info.name
          ? hash(data.customer_info.name.toLowerCase())
          : undefined,
        ph: data.customer_info.phone
          ? hash(data.customer_info.phone.replace(/\D/g, ""))
          : undefined,
      },
      custom_data: {
        currency: data.currency,
        value: data.value.toString(),
        ...data.custom_data,
      },
    };

    const fbApiUrl = `https://graph.facebook.com/v18.0/${process.env.FB_PIXEL_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}`;

    const response = await fetch(fbApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [conversionData],
        test_event_code:
          process.env.NODE_ENV === "development" ? "TEST" : undefined,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Facebook API error: ${response.status} - ${errorText}`);
    }

    const fbResponse = await response.json();
    console.log("Facebook conversion event sent successfully:", fbResponse);

    return NextResponse.json({
      success: true,
      fbResponse,
      message: "Conversion event sent successfully",
    });
  } catch (error) {
    console.error("Facebook conversion error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

async function hash(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
