import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import PartsContext from "../components/PartsContext";

/* eslint-disable new-cap */
import { Outfit, Montserrat } from "next/font/google";
/* eslint-disable camelcase */
import { Bebas_Neue } from "next/font/google";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

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
  const [user, setUser] = useState({
    name: "CONTEXT NAME",
    image:
      "https://www.playbillder.com/static/productions/Notre_Dame_High_School/2019/Into_the_Woods/images/Bobby_907_.JPG",
  });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          uid: user.uid,
          image: user.photoURL,
        });
      }
    });
  }, []);

  return (
    <PartsContext.Provider
      value={{ user, setUser, selectedItem, setSelectedItem }}
    >
      <main
        className={`${outfit.variable} ${montserrat.variable} ${bebasNeue.variable}`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </PartsContext.Provider>
  );
}
