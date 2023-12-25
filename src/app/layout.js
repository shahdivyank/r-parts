// eslint-disable-next-line camelcase
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line new-cap
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

// eslint-disable-next-line new-cap
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
