import type { Metadata } from "next";
import { Genos, K2D, Merienda, Michroma, Rajdhani, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const globalFont = Rajdhani({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "600",
});

export const titleFont = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", globalFont.className, "font-sans", geist.variable)}>
      <body className="">
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
