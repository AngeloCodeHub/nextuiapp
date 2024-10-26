import { Inter as FontSans, Lusitana } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ['400', '700'],
});
