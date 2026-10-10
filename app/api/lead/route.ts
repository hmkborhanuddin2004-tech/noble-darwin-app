import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // In production, forward to your n8n or Make.com webhook:
    // const webhookUrl = process.env.MAKE_WEBHOOK_URL || process.env.TELEGRAM_BOT_WEBHOOK;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
    // }

    console.log("⚡ [LEAD RECEIVED]:", body);

    return NextResponse.json({
      success: true,
      message: "Lead processed and queued successfully.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Lead processing error:", error);
    return NextResponse.json({ success: false, error: "Failed to process lead." }, { status: 500 });
  }
}
