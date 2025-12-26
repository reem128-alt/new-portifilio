import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!recipient) {
      console.error("CONTACT_RECIPIENT_EMAIL is not set.");
      return Response.json(
        { error: "Email recipient is not configured." },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="margin-top: 24px;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
