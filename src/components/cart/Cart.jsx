"use client";
import { useEffect, useState } from "react";
import Items from "./Items";
import Total from "./Total";
import Delivery from "./Delivery";

import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  useEffect(() => {
    const stripe = loadStripe(`${process.env.NEXT_STRIPE_PUBLIC_KEY}`);

    if (!stripe) {
      return;
    }
  }, []);
  const [state, setState] = useState(0);

  return (
    <div className="flex w-5/6 justify-between">
      <div className="w-full">
        {state == 1 && <Delivery />}
        <Items />
      </div>

      <Total state={state} setState={setState} />
    </div>
  );
};

export default Cart;
