import React from "react";
import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <div className="w-[40%] h-full flex flex-col justify-between p-12 border-[1px] border-rparts-borderGray rounded-3xl">
      <CartItem />
      <span className="flex border-[0.5px] border-rparts-borderGray my-7" />
      <CartItem />
      <span className="flex border-[0.5px] border-rparts-borderGray my-7" />
      <CartItem />
    </div>
  );
};

export default CartItems;
