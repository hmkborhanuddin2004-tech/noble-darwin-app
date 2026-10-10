import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_CONFIG.personal.name} | ${PORTFOLIO_CONFIG.personal.role}`,
  description: PORTFOLIO_CONFIG.personal.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#08090b] text-zinc-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
