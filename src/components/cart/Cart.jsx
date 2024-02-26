"use client";
import { useEffect, useState } from "react";
import Items from "./Items";
import Total from "./Total";
import Delivery from "./Delivery";
import Header from "./Header";
import { DELIVERY_FIELDS } from "@/data/cart";
import { ITEMS } from "@/mock/items";

import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const [items, setItems] = useState(ITEMS);
  useEffect(() => {
    const stripe = loadStripe(`${process.env.NEXT_STRIPE_PUBLIC_KEY}`);

    if (!stripe) {
      return;
    }
  }, []);
  const [state, setState] = useState(0);
  const [delivery, setDelivery] = useState({
    ...Object.fromEntries(DELIVERY_FIELDS.map((k) => [[k.field], ""])),
    deliveryMethod: "Standard Shipping",
  });
  const nextState = () => {
    if (state === 1) console.log(items, delivery);
    else setState(state + 1);
  };

  return (
    <div className="w-10/12">
      <Header state={state} />
      <div className="flex w-full gap-8 mt-5">
        <div className="w-2/3">
          <Delivery
            state={state}
            delivery={delivery}
            setDelivery={setDelivery}
          />
          <Items state={state} items={items} setItems={setItems} />
        </div>
        <Total state={state} nextState={nextState} />
      </div>
    </div>
  );
};

export default Cart;
