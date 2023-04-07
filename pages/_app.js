import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
/* eslint-disable new-cap */
import { Outfit, Montserrat, Bebas_Neue } from "@next/font/google";
// import { bebasNeue } from "@next/font/google";

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
  // return(  <main className={`${readex.variable}`}></main><Component {...pageProps} /></main>)
  return (
    <main
      className={`${outfit.variable} ${montserrat.variable} ${bebasNeue.variable}`}
    >
      {/* <main
      className={`${outfit.className}${montserrat.className}${bebasNeue.className}`}
    > */}
      <Component {...pageProps} />
    </main>
  );
}
