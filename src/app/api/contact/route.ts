import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return Response.json(
        {
          error: "Missing RESEND_API_KEY",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const body = await req.json();

    const { name, email, company, message } = body;

    await resend.emails.send({
      from: "OutsourceBay <onboarding@resend.dev>",
      to: "lmsconstantino@gmail.com",
      subject: "New OutsourceBay Inquiry",
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
    });
  } catch (error) {
    console.log("CONTACT API ERROR:", error);
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
