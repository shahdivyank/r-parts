import React from "react";
import CheckoutCartItem from "./CheckoutCartItem";

const CartItems = () => {
  return (
    <div className="  flex flex-col justify-between rounded-3xl h-fit  my-4 p-4 bg-white border-2 border-rparts-borderGray">
      <div className="text-3xl font-outfit font-bold p-3"> Shopping Cart </div>
      <CheckoutCartItem />
      <span className="flex border-[1px] border-rparts-borderGray my-7" />
      <CheckoutCartItem />
      <span className="flex border-[1px] border-rparts-borderGray my-7" />
      <CheckoutCartItem />
    </div>
  );
};

export default CartItems;
