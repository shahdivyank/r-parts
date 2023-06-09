import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import PartsContext from "../components/PartsContext";
import { SessionProvider } from "next-auth/react";
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

export default function App({ Component, pageProps, session }) {
  const [user, setUser] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.post("/api/getItems").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <SessionProvider session={session}>
      <PartsContext.Provider
        value={{
          items,
          setItems,
          user,
          setUser,
          selectedItem,
          setSelectedItem,
          cart,
          setCart,
          total,
          setTotal,
          order,
          setOrder,
        }}
      >
        <main
          className={`${outfit.variable} ${montserrat.variable} ${bebasNeue.variable}`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PartsContext.Provider>
    </SessionProvider>
  );
}
