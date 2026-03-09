import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ChatTime AI - Intelligent Conversational Platform",
  description:
    "Modern AI chatbot platform for businesses. Connect with customers across WhatsApp, Instagram, and Facebook with intelligent, context-aware conversations.",
  generator: "ChatTime AI",
  keywords: [
    "AI chatbot",
    "WhatsApp business",
    "Instagram automation",
    "Facebook Messenger",
    "customer support",
    "conversational AI",
  ],
  authors: [{ name: "ChatTime AI" }],
  openGraph: {
    title: "ChatTime AI - Intelligent Conversational Platform",
    description: "Modern AI chatbot platform for businesses",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
