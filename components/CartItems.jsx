import React from "react";
import CartItem from "./CartItem";

const CartItems = () => {
  return (
    // <div>
    <div className="w-[40%] h-full flex flex-col justify-between p-12 border-[1px] border-rparts-borderGray rounded-3xl">
      {/* <CartItem /> */}
      {/* <div className=""> */}
      <CartItem />
      <span className="flex border-[1px] border-rparts-borderGray my-7" />
      {/* </div> */}
      {/* <div className=""> */}
      <CartItem />
      <span className="flex border-[1px] border-rparts-borderGray my-7" />
      {/* </div> */}
      <CartItem />
      {/* <div className="">
        <CartItem />
        <span className="flex border-[1px] border-rparts-borderGray" />
      </div>
      <div className="">
        <CartItem />
        <span className="flex border-[1px] border-rparts-borderGray " />
      </div> */}
      {/* <CartItem />
      <span className="flex border-[1px] border-rparts-borderGray" />
      <CartItem /> */}
    </div>
    // </div>
  );
};

export default CartItems;
