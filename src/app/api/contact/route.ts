import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "Missing API key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name = body.name || "No Name";
    const email = body.email || "No Email";
    const company = body.company || "No Company";
    const message = body.message || "No Message";

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "lmsconstantino@gmail.com",
      subject: "New OutsourceBay Inquiry",
      replyTo: email,
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("RESEND ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error?.message || "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}
