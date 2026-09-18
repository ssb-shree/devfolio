import { Geist, Michroma, Rajdhani } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const globalFont = Rajdhani({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "600",
});

export const titleFont = Michroma({
  weight: "400",
  subsets: ["latin"],
});
