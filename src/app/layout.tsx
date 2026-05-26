import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OutsourceBay | Managed Offshore Teams",
  description:
    "Scale faster with managed offshore operations, customer support, executive assistance, AI-enhanced workflows, and dedicated offshore teams.",

  keywords: [
    "offshore teams",
    "outsourcing",
    "managed offshore operations",
    "virtual assistants",
    "customer support outsourcing",
    "AI workflows",
    "executive assistance",
    "business operations",
  ],

  openGraph: {
    title: "OutsourceBay | Managed Offshore Teams",
    description:
      "Build smarter offshore operations with AI-enhanced workflows and dedicated execution teams.",
    url: "https://outsourcebay.vercel.app",
    siteName: "OutsourceBay",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OutsourceBay | Managed Offshore Teams",
    description:
      "Scale faster with structured offshore operations and AI-powered workflows.",
  },

  metadataBase: new URL("https://outsourcebay.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-white">
        {children}
      </body>
    </html>
  );
}
