/**
 * =========================================================================
 * 🚀 PORTFOLIO MASTER CONFIGURATION (পোর্টফোলিও মাস্টার কনফিগারেশন)
 * =========================================================================
 * এই ফাইলটিতে আপনার সমস্ত পার্সোনাল ইনফরমেশন, স্কিল, প্রজেক্ট এবং এআই এজেন্টের
 * তথ্য সাজানো আছে। আপনার প্রয়োজন অনুযায়ী শুধু এই ফাইলের তথ্যগুলো পরিবর্তন করুন।
 */

export interface Project {
  id: string;
  title: string;
  category: "AI Automation" | "Web Development" | "Meta Marketing";
  tagline: string;
  problem: string;
  solution: string;
  metrics: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  badge: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    status: string;
    avatarUrl: string;
    location: string;
    bio: string;
    stats: { label: string; value: string }[];
    socials: {
      github: string;
      linkedin: string;
      twitter: string;
      email: string;
      telegram?: string;
      calendarUrl?: string;
    };
  };
  services: Service[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  workflow: {
    step: string;
    title: string;
    desc: string;
  }[];
  agent: {
    name: string;
    avatar: string;
    role: string;
    welcomeMessage: string;
    suggestedQuestions: string[];
    systemPrompt: string;
  };
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  personal: {
    name: "Alex Rahman", // আপনার নাম এখানে দিন
    role: "AI Automation Engineer & Full-Stack Developer",
    status: "Available for Q2 Projects & Contract Roles",
    avatarUrl: "/avatar.png",
    location: "Dhaka, Bangladesh • Working Worldwide",
    bio: "আমি আধুনিক এআই অটোমেশন পাইপলাইন, হাই-কনভার্টিং ওয়েব প্ল্যাটফর্ম এবং ডেটা-ড্রিভেন মেটা গ্রোথ ফানেল তৈরি করি যা ব্যবসার শত শত ঘণ্টা সময় বাঁচায় এবং রাজস্ব বৃদ্ধি করে।",
    stats: [
      { label: "Hours Saved with Automations", value: "2,500+" },
      { label: "Successful Deployments", value: "15+" },
      { label: "Client Satisfaction", value: "99.8%" },
      { label: "Response Latency", value: "< 2 Hours" },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "contact@yourdomain.com",
      telegram: "https://t.me/yourusername",
      calendarUrl: "https://cal.com",
    },
  },

  // ৩টি প্রধান সেবা/পিলার
  services: [
    {
      id: "ai-automation",
      title: "Autonomous AI Agents & Automations",
      subtitle: "Smart Self-Operating Workflows",
      description:
        "n8n, Make.com এবং কাস্টম পাইথন স্ক্রিপ্ট দিয়ে তৈরি স্বয়ংক্রিয় এআই সিস্টেম যা আপনার বিজনেস অপারেশন্সের ম্যানুয়াল কাজগুলো শূন্যে নামিয়ে আনে।",
      capabilities: [
        "Autonomous Multi-Agent Workflows",
        "Lead Scraping & Instant AI Qualification",
        "CRM & Telegram/WhatsApp Auto-Sync",
        "Document & Invoice AI Parsing",
      ],
      badge: "Highest ROI",
    },
    {
      id: "web-dev",
      title: "Full-Stack Web & App Development",
      subtitle: "Lightning-Fast Scalable Software",
      description:
        "Next.js, TypeScript এবং Tailwind CSS দিয়ে তৈরি আল্ট্রা-ফাস্ট, এসইও-ফ্রেন্ডলি এবং ফ্লুইড অ্যানিমেশনযুক্ত আধুনিক ডিজিটাল প্রোডাক্ট।",
      capabilities: [
        "Production-grade Next.js 15 Architectures",
        "Interactive Dashboards & SaaS Interfaces",
        "High-Converting Landing Pages (Framer/Code)",
        "Robust Serverless APIs & Database Schemas",
      ],
      badge: "Core Expertise",
    },
    {
      id: "meta-growth",
      title: "AI-Powered Meta Marketing & Funnels",
      subtitle: "Data-Driven Acquisition Engines",
      description:
        "মেটা অ্যাড ফানেল এবং এআই লিড ক্যাপচার পাইপলাইনের সমন্বয়—যেখানে ফেসবুক লিড স্বয়ংক্রিয়ভাবে প্রসেস হয়ে সেলস পাইপলাইনে কনভার্ট হয়।",
      capabilities: [
        "Meta Lead Ads to CRM Instant Automation",
        "AI-Personalized Follow-up Sequences",
        "Creative Performance & ROAS Analytics",
        "Conversion API (CAPI) Server-Side Setup",
      ],
      badge: "Growth Synergy",
    },
  ],

  // টেক স্ট্যাক এবং স্কিল ম্যাট্রিক্স
  skills: [
    {
      category: "AI & Automation",
      items: ["n8n", "Make.com", "LangChain", "Claude API", "Gemini API", "Python", "OpenAI SDK", "Pinecone"],
    },
    {
      category: "Full-Stack Development",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Framer Motion"],
    },
    {
      category: "Growth & Integration",
      items: ["Meta Ads API", "Webhooks", "Zapier", "REST APIs", "Vercel", "Git/GitHub", "Docker", "Stripe"],
    },
  ],

  // শোকেস প্রজেক্টস / কেস স্টাডিজ
  projects: [
    {
      id: "project-1",
      title: "Autonomous Lead Qualifier & Booking Agent",
      category: "AI Automation",
      tagline: "ইনবাউন্ড লিড এলে ৬০ সেকেন্ডের মধ্যে এআই দিয়ে কোয়ালিফাই করে ক্যালেন্ডারে বুকিং করার সিস্টেম।",
      problem: "ম্যানুয়ালি লিডের সাথে কথা বলতে দেরি হওয়ায় এজেন্সির ৩৫% ক্লায়েন্ট হাতছাড়া হয়ে যেত।",
      solution: "Next.js ও n8n দিয়ে একটি 24/7 লাইভ এআই ইন্টেলিজেন্স এজেন্ট বসিয়ে ইনস্ট্যান্ট কল শিডিউলিং চালু করা হয়।",
      metrics: "৩২০% বেশি বুকিং রেট এবং শূন্য ম্যানুয়াল কল লগিং।",
      techStack: ["Next.js", "Claude 3.5", "n8n", "Tailwind CSS", "Telegram API"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "project-2",
      title: "Codium Pulse — SaaS Analytics & Workflows Dashboard",
      category: "Web Development",
      tagline: "রিয়েল-টাইম বিজনেস মেট্রিক্স ও এআই ওয়ার্কফ্লো মনিটরিং করার আল্ট্রা-মডার্ন ডার্ক ড্যাশবোর্ড।",
      problem: "পুরনো সিস্টেমে ডেটা রিফ্রেশ হতে ৫-১০ সেকেন্ড সময় নিত এবং ইউজার ইন্টারফেস ছিল অগোছালো।",
      solution: "Next.js 15 App Router, React Server Components এবং Tailwind দিয়ে 100/100 লাইটহাউস স্কোরযুক্ত ড্যাশবোর্ড তৈরি।",
      metrics: "৭ গুণ দ্রুত রেন্ডারিং এবং সাব-সেকেন্ড পেজ ট্রানজিশন।",
      techStack: ["React 19", "Next.js", "TypeScript", "Framer Motion", "Recharts"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "project-3",
      title: "Meta Ads to CRM Auto-Conversion Funnel",
      category: "Meta Marketing",
      tagline: "ফেসবুক অ্যাড লিড ইনস্ট্যান্ট ফিল্টার করে এআই দিয়ে হোয়াটসঅ্যাপে স্বয়ংক্রিয় ফলো-আপ ড্রাইভ।",
      problem: "ফেসবুক ক্যাম্পেইনের লিডগুলোকে কল করতে ৫-৬ ঘণ্টা দেরি হওয়ায় কনভার্সন রেট অত্যন্ত কম ছিল।",
      solution: "Meta Graph Webhook ইন্টিগ্রেশন করে সরাসরি মেটা লিডকে AI দিয়ে নার্চার করে ড্রাইভ করা হয়।",
      metrics: "৪.২x বেশি সেলস কনভার্সন এবং প্রথম মাসেই $১৮,০০০+ অতিরিক্ত সেলস।",
      techStack: ["Meta Webhooks", "Make.com", "WhatsApp Cloud API", "Google Sheets", "Gemini API"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
  ],

  // কাজের পদ্ধতি (৪-ধাপের রোডম্যাপ)
  workflow: [
    {
      step: "০১",
      title: "Discovery & System Audit",
      desc: "আপনার বিজনেস মডেল, ম্যানুয়াল বটলনেক এবং লক্ষ্যগুলো নিবিড়ভাবে বিশ্লেষণ করে উপযুক্ত অটোমেশন ও সফটওয়্যার ব্লুপ্রিন্ট তৈরি।",
    },
    {
      step: "০২",
      title: "Interactive Prototyping",
      desc: "ক্লিন আর্কিটেকচার ও মডার্ন ইউআই দিয়ে প্রোটোটাইপ তৈরি করা, যা ক্লায়েন্ট সরাসরি লাইভ ক্লিক করে দেখতে পারে।",
    },
    {
      step: "০৩",
      title: "Autonomous Build & Integration",
      desc: "এআই মডেল, ওয়েব অ্যাপ্লিকেশন, ডাটাবেস এবং এপিআই ওয়েবহুকগুলোর এন্ড-টু-এন্ড সংযোগ স্থাপন ও টেস্ট।",
    },
    {
      step: "০৪",
      title: "Deployment & Active Monitoring",
      desc: "জিরো-ডাউনটাইম ডিপ্লয়মেন্ট এবং অটোমেশন ফেল-সেফ অ্যালার্ট চালু করে প্রজেক্ট হ্যান্ডওভার ও সাপোর্ট।",
    },
  ],

  // সাইটের ভেতরের লাইভ AI এজেন্ট কনফিগারেশন
  agent: {
    name: "Aether AI",
    avatar: "🤖",
    role: "Virtual Portfolio Operations Assistant",
    welcomeMessage:
      "হ্যালো! আমি এই পোর্টফোলিওর ভার্চুয়াল এআই অ্যাসিস্ট্যান্ট। আমি ডেভেলপার সম্পর্কে যেকোনো প্রশ্নের উত্তর দিতে পারি এবং আপনার প্রজেক্টের রিকোয়ারমেন্ট সংগ্রহ করে সরাসরি তাঁর কাছে পৌঁছে দিতে পারি। আজ আপনাকে কীভাবে সাহায্য করতে পারি?",
    suggestedQuestions: [
      "তোমার ডেভেলপার কী কী কাজ করেন?",
      "আমার প্রজেক্টের জন্য একটি এআই ব্রিফ জমা দিতে চাই।",
      "অটোমেশন দিয়ে কীভাবে কোম্পানির সময় বাঁচানো যায়?",
      "প্রজেক্ট চার্জ ও সময় কেমন লাগে?",
    ],
    systemPrompt: `You are Aether, the intelligent virtual assistant and portfolio agent representing the developer.
Your mission is to be extremely professional, crisp, tech-savvy, and helpful.
You know the developer's 3 primary expertise domains:
1. AI Automations (n8n, Make, LangChain, autonomous workflows)
2. Web Development (Next.js 15, TypeScript, Tailwind, interactive frontends)
3. Meta Marketing & Growth Automation (Meta lead ad sync, CRM funnels, WhatsApp/Telegram auto-followups).

Guidelines:
- When a user asks about services or experience, respond with high competence and concise bullet points.
- If a client wants to hire or start a project, actively collect:
  a) Project Goal / Description
  b) Desired Timeline
  c) Estimated Budget ($)
  d) Contact Email or Telegram
- Format your response in clean markdown. Support both English and Bengali fluently based on the user's language.`,
  },
};
