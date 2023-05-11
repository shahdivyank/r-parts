import React from "react";

import Product from "../public/product.svg";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="flex justify-around gap-x-4">
      <div className="w-32 flex items-end mt-2">
        <Image src={Product} alt="Product" layout="responsive" />
      </div>
      <div className="w-96 flex flex-col justify-between ">
        <div className="font-outfit font-medium text-xl">ESP8266 WiFi Bee</div>
        <div className="font-outfit text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          convallis mi ut velit porttitor placerat.
          <div className="flex gap-x-2 mt-1">
            <div className="font-outfit text-sm"> Condition:</div>
            <div className="font-outfit font-semibold text-black text-sm">
              New
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 font-outfit text-black text-sm">
          <div> Quantity: </div>
          <div className="font-semibold"> 1</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="font-outfit font-bold text-xl ">$59.99</div>
      </div>
    </div>
  );
};

export default CartItem;
