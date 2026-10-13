import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Composure — AI, Software & Automation",
  description: "Composure (Pty) Ltd builds AI-powered software, websites, automations, and business systems for companies in Namibia and beyond. AI integration, web development, process automation, custom software, and mobile apps.",
  keywords: [
    "Composure",
    "Composure (Pty) Ltd",
    "AI integration Namibia",
    "software development Namibia",
    "business automation Windhoek",
    "custom software Namibia",
    "mobile app development Namibia",
    "website development Namibia",
    "AI agents for business",
    "POS system Namibia",
    "n8n automation"
  ],
  authors: [{ name: "Composure (Pty) Ltd" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "Composure — AI, Software & Automation",
    description: "AI integration, websites, automation, custom software, and mobile apps for Namibian businesses. Book a free consultation.",
    url: "https://www.composuretech.com",
    siteName: "Composure",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F4F1EA] text-[#12151A] selection:bg-[#0A2540] selection:text-white">
        {children}
      </body>
    </html>
  );
}
