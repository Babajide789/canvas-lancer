import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!email || !name || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // REPLY EMAIL TO USERS
    await resend.emails.send({
      from: "Canvas Lancer <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for contacting us! We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We’ll get back to you as soon as possible.</p>
        <p>Cheers,<br/>Canvas Lancer</p>
      `,
    });

    // 2️⃣ EMAIL NOTIF TO SELF
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "your_email@example.com",
      subject: `New Contact from ${name}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
