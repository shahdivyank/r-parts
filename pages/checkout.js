import Payment from "../components/Payment";
import CheckoutTotal from "../components/CheckoutTotal";
import Schedule from "../components/Schedule";
import CheckoutCart from "../components/CheckoutCart";
import { useContext, useEffect } from "react";
import PartsContext from "../components/PartsContext";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Checkout() {
  const { data: session } = useSession();
  const { cart, setCart, setOrder } = useContext(PartsContext);

  useEffect(() => {
    if (session && cart == null) {
      axios.post("/api/getCart", { uid: session.user.uid }).then((response) => {
        setCart(response.data.cart);
        console.log(response.data);
        setOrder({ cart: response.data.id });
      });
    }
  }, [session]);

  return (
    cart && (
      <>
        <div className="flex justify-center w-full ">
          <div className="w-[70%]">
            <div className="font-bebasNeue text-4xl font-bold ">CHECKOUT </div>
            <div className="font-outfit text-rparts-subHeadingGray text-sm">
              Complete your purchase by providing the following information
            </div>
            <div className="flex justify-center gap-x-10">
              <div className="flex w-[60%] flex-col">
                <Payment />
                <Schedule />

                <CheckoutCart />
              </div>
              <div className="w-[40%] mx-10 ">
                <CheckoutTotal />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
