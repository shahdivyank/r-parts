import React from "react";
import { toast } from "react-hot-toast";
const toaster = (name, price) => {
  return toast.custom(
    <div className="flex items-center justify-center bg-white border-2 border-parts-orange shadow-md p-10 rounded-3xl">
      <span className="font-bold">{name}</span> &nbsp; has been added with a
      price of &nbsp;<span className="font-bold">${price}</span>
    </div>,
  );
};

export default toaster;
