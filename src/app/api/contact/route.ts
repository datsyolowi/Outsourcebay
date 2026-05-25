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

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "lmsconstantino@gmail.com",
      subject: "Test Email",
      html: `
        <h1>OutsourceBay Test</h1>
        <p>${JSON.stringify(body)}</p>
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
        fullError: error,
      },
      {
        status: 500,
      },
    );
  }
}
