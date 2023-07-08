import React from "react";
import Image from "next/image";

const CartItem = ({ image, title, condition, quantity, price }) => {
  return (
    <div className="flex justify-around gap-x-4">
      <div className="w-32 flex items-end mt-2">
        <Image src={image} alt="Product" width={128} height={128} />
      </div>
      <div className="w-96 flex flex-col justify-between ">
        <div className="font-outfit font-medium text-xl">{title}</div>
        <div className="font-outfit text-sm ">
          <div className="flex gap-x-2 mt-1">
            <div className="font-outfit text-sm"> Condition:</div>
            <div className="font-outfit font-semibold text-black text-sm">
              {condition}
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 font-outfit text-black text-sm">
          <div>Quantity:</div>
          <div className="font-semibold">{quantity}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="font-outfit font-bold ">${price}.00</div>
      </div>
    </div>
  );
};

export default CartItem;
