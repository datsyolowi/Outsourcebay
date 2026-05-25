import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name = body.name || "No Name";
    const email = body.email || "No Email";
    const company = body.company || "No Company";
    const message = body.message || "No Message";

    const response = await resend.emails.send({
      from: "OutsourceBay <onboarding@resend.dev>",
      to: "lmsconstantino@gmail.com",
      subject: "New OutsourceBay Inquiry",
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #111827;">
          <h1 style="font-size: 28px; margin-bottom: 24px;">
            New OutsourceBay Inquiry
          </h1>

          <p style="margin-bottom: 12px;">
            <strong>Name:</strong> ${name}
          </p>

          <p style="margin-bottom: 12px;">
            <strong>Email:</strong> ${email}
          </p>

          <p style="margin-bottom: 12px;">
            <strong>Company:</strong> ${company}
          </p>

          <div style="margin-top: 24px;">
            <strong>Message:</strong>

            <div
              style="
                margin-top: 10px;
                padding: 16px;
                border-radius: 12px;
                background: #f3f4f6;
                line-height: 1.7;
              "
            >
              ${message}
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
      response,
    });
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error?.message,
      },
      {
        status: 500,
      },
    );
  }
}
