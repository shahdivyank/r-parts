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
          <div className="w-7/12 mx-3">
            <div className="font-bebasNeue text-4xl font-bold ">CHECKOUT </div>
            <div className="font-outfit text-rparts-subHeadingGray">
              Complete your purchase by providing the following information
            </div>
            <div className="flex w-full justify-center ">
              <div className="flex flex-col">
                <Payment />
                <Schedule />

                <CheckoutCart />
              </div>
              <div className="w-11/12 mx-10 ">
                <CheckoutTotal />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
