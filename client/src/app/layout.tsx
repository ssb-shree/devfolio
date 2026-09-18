import type { Metadata } from "next";
import { Michroma, Rajdhani, Geist } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ssb.is-a.dev"),

  title: {
    default: "Shree Bavachikar",
    template: "%s · Shree Bavachikar",
  },

  description:
    "Shree Bavachikar is a software engineer and full-stack developer specializing in React, Next.js, TypeScript, and backend development.",
  keywords: [
    "Shree Bavachikar",
    "Shree",
    "Shree Apsit",
    "software engineer",
    "backend engineer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Mumbai",
    "Maharashtra",
  ],

  authors: [{ name: "Shree Bavachikar" }],
  creator: "Shree Bavachikar",

  alternates: {
    canonical: "https://ssb.is-a.dev",
  },

  openGraph: {
    type: "website",
    url: "https://ssb.is-a.dev",
    title: "Shree Bavachikar",
    description:
      "Shree Bavachikar is a software engineer and full-stack developer specializing in React, Next.js, TypeScript, and backend development.",
    siteName: "Shree Bavachikar",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shree Bavachikar",
    description:
      "Shree Bavachikar is a software engineer and full-stack developer specializing in React, Next.js, TypeScript, and backend development.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

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
