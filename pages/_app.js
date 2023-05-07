import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import PartsContext from "../components/PartsContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

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
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   name: "CONTEXT USER",
  // });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        axios
          .post("api/getUserInfo", { uid: currentUser.uid })
          .then((response) => {
            setUser({
              ...response.data.data,
              name: currentUser.displayName,
              image: currentUser.photoURL,
              uid: currentUser.uid,
              email: currentUser.email,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);
  // console.log(user);

  return (
    <PartsContext.Provider value={{ user, setUser }}>
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
