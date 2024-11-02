import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Lusitana,
  Dela_Gothic_One,
  Zen_Kurenaido
} from "next/font/google";

export const zenKurenaido = Zen_Kurenaido({
  // subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
});

export const delaGothicOne = Dela_Gothic_One({
  // subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
});

export const fontSans = FontSans({
  subsets: ["latin"],
  // variable: "--font-sans",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
