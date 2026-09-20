import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAWEZA CONSULTING — Systems | Strategy | Growth",
  description: "A Namibian business platform combining practical corporate advisory, compliance, tax support, research, and cross-border Africa market development.",
  keywords: [
    "Naweza Consulting",
    "Naweza Investments CC",
    "Naweza Consulting Investments (Pty) Ltd",
    "Namibia business advisory",
    "BIPA registration compliance",
    "NamRA tax support",
    "Africa market development SADC",
    "Windhoek business consultants"
  ],
  authors: [{ name: "NAWEZA CONSULTING" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "NAWEZA CONSULTING — Systems | Strategy | Growth",
    description: "Your products. Our market intelligence. Africa. Corporate advisory, compliance, and Africa market development.",
    url: "https://www.nawezaconsulting.com",
    siteName: "NAWEZA CONSULTING",
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