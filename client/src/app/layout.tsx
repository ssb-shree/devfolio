import type { Metadata } from "next";
import { Yuyu, Merienda } from "next/font/google";
import "./globals.css";

const titleFont = Merienda({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "800",
});

const globalFont = Yuyu({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${titleFont.className} h-full antialiased`}>
      <body className="">{children}</body>
    </html>
  );
}
