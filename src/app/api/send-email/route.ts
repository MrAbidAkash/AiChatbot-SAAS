import { NextRequest, NextResponse } from "next/server";

interface EmailRequest {
  to: string;
  subject: string;
  html: string;
}

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html }: EmailRequest = await req.json();

    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: "Missing required fields: to, subject, html" },
        { status: 400 },
      );
    }

    if (process.env.NODE_ENV === "development") {
      console.log("Email would be sent in production:", { to, subject });
      return NextResponse.json({
        success: true,
        message: "Email logged in development",
      });
    }

    let emailService = process.env.EMAIL_SERVICE || "resend";

    if (emailService === "resend") {
      return await sendWithResend({ to, subject, html });
    } else if (emailService === "sendgrid") {
      return await sendWithSendGrid({ to, subject, html });
    } else {
      throw new Error(`Unsupported email service: ${emailService}`);
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    );
  }
}

async function sendWithResend({
  to,
  subject,
  html,
}: EmailRequest): Promise<NextResponse> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }

  const data = await response.json();
  return NextResponse.json({ success: true, messageId: data.id });
}

async function sendWithSendGrid({
  to,
  subject,
  html,
}: EmailRequest): Promise<NextResponse> {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY is not configured");
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.FROM_EMAIL || "noreply@yourdomain.com" },
      subject,
      content: [{ type: "text/html", value: html }],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid API error: ${error}`);
  }

  return NextResponse.json({
    success: true,
    messageId: response.headers.get("x-message-id"),
  });
}
