"use client";
import { useState } from "react";
import Items from "./Items";
import Total from "./Total";
import Delivery from "./Delivery";
import Header from "./Header";
import { DELIVERY_FIELDS } from "@/data/cart";
import { ITEMS } from "@/mock/items";

const Cart = () => {
  const [items, setItems] = useState(ITEMS);
  const [state, setState] = useState(0);
  const [deliveryInfo, setDeliveryInfo] = useState({
    ...Object.fromEntries(DELIVERY_FIELDS.map((k) => [[k.field], ""])),
    deliveryMethod: "Standard Shipping",
  });
  const nextState = () => {
    setState(state + 1);
    if (state === 1) console.log(items, deliveryInfo);
  };

  return (
    <div className="w-10/12">
      <Header state={state} />
      <div className="flex w-full gap-8 mt-5">
        <div className="w-2/3">
          <Delivery
            state={state}
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
          />
          <Items state={state} items={items} setItems={setItems} />
        </div>
        <Total state={state} nextState={nextState} />
      </div>
    </div>
  );
};

export default Cart;
