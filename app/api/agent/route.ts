import { NextResponse } from "next/server";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

export async function POST(req: Request) {
  try {
    const { message, conversationHistory } = await req.json();
    const query = (message || "").toLowerCase().trim();

    // Check if user has an AI API key configured (e.g. GEMINI_API_KEY or ANTHROPIC_API_KEY)
    const geminiKey = process.env.GEMINI_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (geminiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `${PORTFOLIO_CONFIG.agent.systemPrompt}\n\nDeveloper Data: ${JSON.stringify(
                        PORTFOLIO_CONFIG
                      )}\n\nUser Question: ${message}`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        const replyText =
          data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

        if (replyText) {
          return NextResponse.json({ reply: replyText });
        }
      } catch (err) {
        console.error("Direct LLM call failed, falling back to intelligent assistant engine", err);
      }
    }

    // High-performance intelligent heuristic reasoning engine:
    let reply = "";

    if (
      query.includes("কাজ") ||
      query.includes("service") ||
      query.includes("কী পারো") ||
      query.includes("সার্ভিস") ||
      query.includes("expertise")
    ) {
      reply = `**${PORTFOLIO_CONFIG.personal.name}** এর প্রধান ৩টি স্পেশালাইজেশন:\n\n` +
        `1. 🤖 **AI Automations & Agents:** n8n, Make.com এবং কাস্টম পাইথন স্ক্রিপ্ট দিয়ে স্বয়ংক্রিয় বিজনেস পাইপলাইন ও বট তৈরি।\n` +
        `2. 💻 **Full-Stack Web Development:** Next.js 15, React 19, TypeScript এবং Tailwind CSS দিয়ে আল্ট্রা-ফাস্ট ও স্কেলেবল ওয়েব অ্যাপ।\n` +
        `3. 📈 **AI-Powered Meta Growth:** ফেসবুক লিড থেকে স্বয়ংক্রিয়ভাবে এআই দিয়ে কাস্টমার কোয়ালিফাই করে CRM ও হোয়াটসঅ্যাপে ইনস্ট্যান্ট পুশ।\n\n` +
        `আপনার কি কোনো নির্দিষ্ট প্রজেক্ট নিয়ে আলোচনা করার ইচ্ছা আছে?`;
    } else if (
      query.includes("চার্জ") ||
      query.includes("cost") ||
      query.includes("price") ||
      query.includes("দাম") ||
      query.includes("budget") ||
      query.includes("টাকা")
    ) {
      reply = `**প্রজেক্ট কস্ট এবং প্রাইসিং স্ট্রাকচার:**\n\n` +
        `• **স্মল অটোমেশন / স্ক্রিপ্ট (Small Pipeline):** $300 - $800 (ডেলিভারি: ২-৪ দিন)\n` +
        `• **স্ট্যান্ডার্ড MVP / ফুল অটোমেশন সিস্টেম:** $1,000 - $2,500 (ডেলিভারি: ১-২ সপ্তাহ)\n` +
        `• **কমপ্লিট প্ল্যাটফর্ম (Web App + AI + CRM):** $3,000 - $6,000+\n\n` +
        `আপনার বাজেট এবং প্রয়োজনীয়তা জানালে আমরা একটি কাস্টম প্ল্যান তৈরি করতে পারি।`;
    } else if (
      query.includes("brief") ||
      query.includes("হায়ার") ||
      query.includes("hire") ||
      query.includes("প্রজেক্ট") ||
      query.includes("project") ||
      query.includes("অর্ডার")
    ) {
      reply = `অসাধারণ! একটি সফল প্রজেক্ট শুরু করার জন্য নিচের ৪টি তথ্য শেয়ার করুন:\n\n` +
        `1. **প্রজেক্টের মূল লক্ষ্য বা সমস্যা** (আপনি কী বানাতে বা অটোমেট করতে চান?)\n` +
        `2. **প্রত্যাশিত সময়সীমা (Timeline)**\n` +
        `3. **আনুমানিক বাজেট রেঞ্জ ($)**\n` +
        `4. **আপনার ইমেইল বা টেলিগ্রাম হ্যান্ডেল**\n\n` +
        `আপনি এগুলো লিখে দিলে আমি সাথে সাথে ডেভেলপারকে একটি পূর্ণাঙ্গ সামারি রিপোর্ট পাঠাবো!`;
    } else if (
      query.includes("সময়") ||
      query.includes("save") ||
      query.includes("অটোমেশন দিয়ে") ||
      query.includes("how it works")
    ) {
      reply = `**এআই অটোমেশন কীভাবে আপনার সময় ও টাকা বাঁচায়?**\n\n` +
        `• **লিড লস শূন্য করা:** ফেসবুক বা ওয়েবসাইট থেকে লিড আসার ৬০ সেকেন্ডের মধ্যে এআই স্বয়ংক্রিয়ভাবে রেসপন্স করে।\n` +
        `• **ম্যানুয়াল ডাটা এন্ট্রি বন্ধ:** ইনভয়েস, ইমেইল বা শীটের কাজগুলো কোনো মানুষের হস্তক্ষেপ ছাড়াই ব্যাকএন্ডে নিজে নিজেই হয়।\n` +
        `• **২৪/৭ ক্লায়েন্ট সাপোর্ট:** আপনার টিম যখন ঘুমাচ্ছে, এআই এজেন্ট তখন ক্লায়েন্টের ব্রিফ সংগ্রহ করে ক্যালেন্ডারে মিটিং বুক করছে।`;
    } else {
      reply = `ধন্যবাদ আপনার মেসেজের জন্য! আমি **${PORTFOLIO_CONFIG.personal.name}**-এর ভার্চুয়াল এআই অ্যাসিস্ট্যান্ট।\n\n` +
        `আপনি কি তাঁর **কেস স্টাডি**, **অটোমেশন টেকনোলজি** অথবা আপনার কোনো প্রজেক্টের **বাজেট ও বাস্তবায়ন পরিকল্পনা** সম্পর্কে জানতে চান? আমাকে যেকোনো প্রশ্ন করতে পারেন!`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Agent API error:", error);
    return NextResponse.json(
      { reply: "দুঃখিত, সংযোগে কিছুটা বিঘ্ন ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}
