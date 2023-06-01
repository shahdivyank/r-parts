import { useContext, useEffect } from "react";
import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";
import PartsContext from "../components/PartsContext";
import axios from "axios";

export default function Cart() {
  const { user, cart, setCart, setOrder } = useContext(PartsContext);

  useEffect(() => {
    if (user && cart == null) {
      axios.post("/api/getCart", { uid: user.uid }).then((response) => {
        setCart(response.data.cart);
        console.log(response.data);
        setOrder({ cart: response.data.id });
      });
    }
  }, [user]);

  return (
    <section className="h-full w-screen font-outfit pt-4 pb-20">
      <div className="flex justify-center gap-x-20">
        <div className="w-[40%] flex flex-col justify-center">
          <div className="flex gap-x-4 text-rparts-subheadingGray text-xs mb-6">
            <button>MARKET</button>
            <p>/</p>
            <button>SHOPPING CART</button>
          </div>
          <div className="font-bebasNeue text-3xl">MY SHOPPING BAG</div>
          <div className="text-sm text-rparts-subheadingGray font-light mb-4">
            View current items in cart and finalize before checkout
          </div>
          <CartItems />
        </div>
        <div className="w-1/4 mt-[7.5rem]">
          <CartTotal />
        </div>
      </div>
    </section>
  );
}
