import nodemailer from "nodemailer"

export const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ID!,
    pass: process.env.GMAIL_PASS!
  }
})

export async function sendEmail(email: string, name: string, message: string) {
  await transpoter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_EMAIL!,
    subject: "📬 New Portfolio Contact Message",
    html: `
    <div style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      background: #1f2937;
      color: #f9fafb;
      border-radius: 8px;
      overflow: hidden;
    ">
      <div style="background: #111827; padding: 20px; text-align: center;">
        <h1 style="margin:0; font-size:24px; letter-spacing:1px;">
          🚀 New Message from Your Portfolio Site
        </h1>
      </div>
      <div style="padding: 20px; line-height: 1.6;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#3b82f6;">${email}</a></p>
        <hr style="border-color: #374151; margin: 20px 0;" />
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      <div style="background: #111827; padding: 12px; text-align: center; font-size:12px; color:#6b7280;">
        <p style="margin:0;">This came from your portfolio contact form.</p>
        <p style="margin:4px 0 0;">© ${new Date().getFullYear()} Dewan Shakib</p>
      </div>
    </div>
  `,
  });

}