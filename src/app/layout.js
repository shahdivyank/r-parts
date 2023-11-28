// eslint-disable-next-line camelcase
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line new-cap
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable}`}>{children}</body>
    </html>
  );
}
