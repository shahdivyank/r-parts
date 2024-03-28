import React from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
const toaster = (image, name, price, quantity, condition) => {
  return toast.custom(
    <div className="grid grid-cols-4 w-4/12 p-2 bg-white gap-2 rounded-lg">
      <div className="flex justify-center items-center ">
        <Image src={image} />
      </div>
      <div className="grid col-span-2 ">
        <div className="font-outfit text-xl flex font-semibold">{name}</div>
        <div className="font-outfit text-base items-end flex font-light ">
          Condition: &nbsp;
          <span className="text-parts-green font-normal">{condition}</span>
        </div>
      </div>
      <div className="grid">
        <div className="font-outfit text-xl font-semibold">${price}.00</div>
        <div className="font-outfit text-base font-light items-end flex ">
          Quantity: &nbsp; <span className="font-semibold">{quantity}</span>
        </div>
      </div>
    </div>,
  );
};

export default toaster;
