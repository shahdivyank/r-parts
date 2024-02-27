import React from "react";
import { toast } from "react-hot-toast";
const toaster = (name, price, quantity, condition) => {
  return toast.custom(
    <div className="flex items-start flex-col justify-center bg-white border-2 border-parts-orange shadow-md w-6/12 p-2 rounded-3xl">
      <div className="font-bold text-xl">
        {name} ${price}
      </div>
      <div className="font-bold text-lg">
        Items: <span className="font-normal text-parts-orange">{quantity}</span>
      </div>
      <div className="font-bold text-lg">
        Condition:{" "}
        <span className="font-normal text-parts-green">{condition}</span>
      </div>
    </div>,
  );
};

export default toaster;
