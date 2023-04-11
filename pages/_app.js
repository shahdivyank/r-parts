import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

/* eslint-disable new-cap */
import { Outfit, Montserrat } from "next/font/google";
/* eslint-disable camelcase */
import { Bebas_Neue } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebasNeue",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${outfit.variable} ${montserrat.variable} ${bebasNeue.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
