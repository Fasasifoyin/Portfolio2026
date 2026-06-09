import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <no-reply@foyin.dev>",
      to: ["fasasifoyin@gmail.com"],
      replyTo: email,
      subject: subject
        ? `Portfolio contact: ${subject}`
        : `New message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#0D0D14;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h2 style="color:#6366F1;margin:0;font-size:18px;font-weight:700;">
              New Portfolio Message
            </h2>
            <p style="color:#71717A;margin:4px 0 0;font-size:12px;">
              via foyin.dev contact form
            </p>
          </div>
          <div style="background:#ffffff;padding:24px 28px;border:1px solid #E4E4E7;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;width:80px;">
                  <span style="font-size:11px;font-weight:700;color:#A1A1AA;text-transform:uppercase;letter-spacing:0.06em;">Name</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:14px;color:#09090B;font-weight:500;">${name}</span>
                </td>
              </tr>
             ${
               phone
                 ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:11px;font-weight:700;color:#A1A1AA;text-transform:uppercase;letter-spacing:0.06em;">Phone</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:14px;color:#09090B;">${phone}</span>
                </td>
              </tr>`
                 : ""
             }
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:11px;font-weight:700;color:#A1A1AA;text-transform:uppercase;letter-spacing:0.06em;">Email</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:14px;color:#6366F1;">${email}</span>
                </td>
              </tr>
              ${
                subject
                  ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:11px;font-weight:700;color:#A1A1AA;text-transform:uppercase;letter-spacing:0.06em;">Subject</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #F4F4F5;">
                  <span style="font-size:14px;color:#09090B;">${subject}</span>
                </td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding:10px 0;vertical-align:top;">
                  <span style="font-size:11px;font-weight:700;color:#A1A1AA;text-transform:uppercase;letter-spacing:0.06em;">Message</span>
                </td>
                <td style="padding:10px 0;">
                  <p style="font-size:14px;color:#09090B;line-height:1.7;margin:0;">${message}</p>
                </td>
              </tr>
            </table>
          </div>
          <div style="background:#FAFAFA;padding:14px 28px;border:1px solid #E4E4E7;border-top:none;border-radius:0 0 8px 8px;">
            <p style="margin:0;font-size:12px;color:#A1A1AA;">
              Hit <strong>Reply</strong> to respond directly to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
