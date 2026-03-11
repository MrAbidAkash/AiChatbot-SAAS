interface EmailData {
  to: string;
  paymentID: string;
}

export async function sendCourseEmail({
  to,
  paymentID,
}: EmailData): Promise<void> {
  try {
    console.log(`Sending course email to ${to} for payment ${paymentID}`);

    const emailContent = {
      to,
      subject: "Payment Successful - Course Access",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Payment Successful!</h2>
          <p>Dear Customer,</p>
          <p>Thank you for your purchase. Your payment has been successfully processed.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Payment Details:</h3>
            <p><strong>Payment ID:</strong> ${paymentID}</p>
            <p><strong>Status:</strong> Completed</p>
          </div>
          <p>You now have access to your course. You can login to your account to start learning.</p>
          <p>If you have any questions, please don't hesitate to contact our support team.</p>
          <br>
          <p>Best regards,<br>The Team</p>
        </div>
      `,
    };

    if (process.env.NODE_ENV === "development") {
      console.log("Email content (development mode):", emailContent);
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailContent),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending course email:", error);
    throw error;
  }
}
