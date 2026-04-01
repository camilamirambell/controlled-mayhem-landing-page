import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Controlled Mayhem — AI that ships.",
  description:
    "We build AI-powered products for clients and tools for the ecosystem. Based in Costa Rica. Deployed everywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
