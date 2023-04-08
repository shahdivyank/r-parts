import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Product from "../public/product.svg";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="flex justify-center w-[40%] gap-x-4 px-4">
      <div className="flex w-48 items-end">
        <Image
          src={Product}
          alt="Product"
          layout="responsive"
          //   className="bg-red-100"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="font-outfit font-medium text-lg">ESP8266 WiFi Bee</div>
        <div className="w-[80%] font-outfit text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          convallis mi ut velit porttitor placerat.
        </div>
        <div className="flex gap-x-2">
          <div className="font-outfit"> Condition:</div>
          <div className="font-outfit font-semibold text-rparts-green">New</div>
        </div>
        <div className="flex w-1/4 justify-between border-[1px] border-rparts-borderGray px-3 rounded-3xl mt-4">
          <div className="font-outfit cursor-pointer">-</div>
          <div className="font-outfit cursor-pointer">1</div>
          <div className="font-outfit cursor-pointer">+</div>
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
