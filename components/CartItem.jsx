import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Product from "../public/product.svg";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="flex justify-center gap-x-4">
      <div className="w-32 flex items-end mt-2">
        <Image src={Product} alt="Product" layout="responsive" />
      </div>
      <div className="w-96 flex flex-col justify-between">
        <div className="font-outfit font-medium text-xl">ESP8266 WiFi Bee</div>
        <div className="font-outfit text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          convallis mi ut velit porttitor placerat.
        </div>
        <div className="flex gap-x-2">
          <div className="font-outfit text-sm"> Condition:</div>
          <div className="font-outfit font-semibold text-rparts-green text-sm">
            New
          </div>
        </div>
        <div className="flex w-32 justify-between border-[1px] border-rparts-borderGray px-3 rounded-3xl mt-3">
          <div className="font-outfit cursor-pointer text-sm">-</div>
          <div className="font-outfit cursor-pointer text-sm">1</div>
          <div className="font-outfit cursor-pointer text-ms">+</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="font-outfit font-semibold text-base">$59.99</div>
        <HiOutlineTrash className="text-xl stroke-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default CartItem;
