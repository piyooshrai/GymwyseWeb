import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/ses";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, gymName, gymSize, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const adminHtml = `
      <h2>New Demo Request from GymWyse.fit</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
        ${gymName ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Gym Name</td><td style="padding:8px;border:1px solid #ddd;">${gymName}</td></tr>` : ""}
        ${gymSize ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Gym Size</td><td style="padding:8px;border:1px solid #ddd;">${gymSize}</td></tr>` : ""}
        ${message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>` : ""}
      </table>
    `;

    const confirmHtml = `
      <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;">
        <div style="background:#0A0E27;padding:32px;text-align:center;">
          <h1 style="color:#00FF88;margin:0;font-size:24px;">GymWyse</h1>
        </div>
        <div style="padding:32px;background:#ffffff;">
          <h2 style="color:#0A0E27;margin-top:0;">Thanks for reaching out, ${name}!</h2>
          <p style="color:#333;line-height:1.6;">We received your demo request and a member of the GymWyse team will be in touch within 24 hours to schedule your personalized walkthrough.</p>
          <p style="color:#333;line-height:1.6;">In the meantime, you can:</p>
          <ul style="color:#333;line-height:1.8;">
            <li><a href="https://gymwyse.fit/roi-calculator" style="color:#3B82F6;">Calculate your estimated ROI</a></li>
            <li><a href="https://gymwyse.fit/blog" style="color:#3B82F6;">Read our latest gym management insights</a></li>
          </ul>
          <p style="color:#999;font-size:12px;margin-top:24px;">GymWyse - Gym Management Software That Proves Its ROI</p>
        </div>
      </div>
    `;

    // Send notification to admin (info@the-algo.com)
    await sendEmail({
      to: process.env.AWS_SES_NOTIFICATION_EMAIL || process.env.AWS_SES_FROM_EMAIL!,
      subject: `New Demo Request: ${name} - ${gymName || "No gym name"}`,
      html: adminHtml,
      replyTo: email,
    });

    // Send confirmation to user
    await sendEmail({
      to: email,
      subject: "Your GymWyse Demo Request Received",
      html: confirmHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
