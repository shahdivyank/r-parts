import React from "react";

const CartTotal = () => {
  return (
    <div className="w-1/4 flex flex-col gap-y-6">
      <div className="flex flex-col px-5 py-4 gap-y-4 rounded-3xl bg-rparts-wrappergGray">
        <div className="flex justify-between">
          <p className="text-xl font-semibold font-outfit">Total</p>
          <p className="text-xl font-semibold font-outfit">$179.97</p>
        </div>
        <span className="border-[1px] border-rparts-borderGray"></span>
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
        <button className="text-center bg-rparts-orange text-rparts-white px-10 py-2 w-full rounded-3xl font-outfit">
          PROCEED TO CHECKOUT
        </button>
        <p className="text-xs text-rparts-subHeadingGray">
          *Schedule pick-up times at checkout
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
