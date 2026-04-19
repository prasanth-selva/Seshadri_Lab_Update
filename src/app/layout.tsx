import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seshadri Lab | Lehigh University — Wearable Bioelectronics & Digital Health",
  description:
    "The Seshadri Lab at Lehigh University pioneers next-generation wearable sensors, bioelectronics, disease management platforms, digital therapeutics, and human performance technologies.",
  keywords: [
    "Seshadri Lab",
    "Lehigh University",
    "Wearable Sensors",
    "Bioelectronics",
    "Digital Health",
    "Disease Management",
    "Human Performance",
  ],
  openGraph: {
    title: "Seshadri Lab | Lehigh University",
    description:
      "Pioneering wearable bioelectronics and digital health solutions at Lehigh University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
