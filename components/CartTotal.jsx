import React from "react";
import Link from "next/link";

const CartTotal = () => {
  return (

    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col px-5 py-4 gap-y-4 rounded-3xl bg-rparts-wrapperGray">

        <div className="flex justify-between">
          <p className="text-xl font-semibold font-outfit">Total</p>
          <p className="text-xl font-semibold bold font-outfit">$179.97</p>
        </div>
        <span className="border-[0.5px] border-rparts-borderGray"></span>
        <div className="gap-y-20">
          <div className="flex justify-between">
            <p className="font-outfit">Items</p>
            <p className="font-outfit">3</p>
          </div>
          <div className="flex justify-between">
            <p className="font-outfit">Delivery*</p>
            <p className="font-outfit">Pick-Up</p>
          </div>
        </div>
      </div>
      <div className="gap-y-4 flex flex-col">
        <Link
          href="/checkout"
          className="text-center bg-rparts-orange text-white px-10 py-2 w-full rounded-3xl font-outfit 
          hover:bg-rparts-hoverOrange hover:text-white"
        >
          PROCEED TO CHECKOUT
        </Link>
        <p className="text-xs text-rparts-subheadingGray font-light">
          *Schedule pick-up times at checkout
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
