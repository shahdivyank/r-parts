"use client";
import { useState } from "react";
import Items from "./Items";
import Total from "./Total";
import Delivery from "./Delivery";

const Cart = () => {
  const [state, setState] = useState(0);

  return (
    <div className="flex w-5/6 justify-between">
      <div className="w-full">
        {state == 1 && <Delivery />}
        <Items />
      </div>

      <Total state={state} setState={setState} className="w-full" />
    </div>
  );
};

export default Cart;
