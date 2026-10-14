import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Composure — Websites, Apps & Automation for Namibian Businesses",
  description: "Composure (Pty) Ltd builds websites, apps, custom software, automation, and AI tools that make everyday business work easier. Based in Windhoek, Namibia. Book a free consultation.",
  keywords: [
    "Composure",
    "Composure (Pty) Ltd",
    "website development Namibia",
    "software development Namibia",
    "business automation Windhoek",
    "custom software Namibia",
    "mobile app development Namibia",
    "POS system Namibia",
    "AI for business Namibia",
  ],
  authors: [{ name: "Composure (Pty) Ltd" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "Composure — Websites, Apps & Automation for Namibian Businesses",
    description: "We build websites, apps, and automation that make everyday business work easier. Based in Windhoek, Namibia.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-[#F4F1EA] text-[#12151A] selection:bg-[#0A2540] selection:text-white">
        {children}
      </body>
    </html>
  );
}
