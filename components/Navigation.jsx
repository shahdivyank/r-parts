import React from "react";
import { BsGear } from "react-icons/Bs";
import { FaRegUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center my-3 mx-12">
      <div className="flex w-1/3 justify-around">
        <span className="flex items-center text-2xl font-medium gap-x-2 font-montserrat">
          <BsGear className="stroke-[0.5px] rotate-12" />
          <div className="flex">
            <p>{"R'P"}</p>
            <p className="italic">A</p>
            <p>RTS</p>
          </div>
        </span>
        <div className="w-2/3 flex items-center justify-between border-[1px] border-rparts-borderGray px-4 py-2 rounded-3xl">
          <input
            className="w-full text-rparts-subHeadingGray font-outfit"
            type="search"
            placeholder={"Search R'Parts"}
          />
          <RiSearchLine className="text-rparts-subHeadingGray" />
        </div>
      </div>
      <div className="flex gap-x-10 justify-between">
        <p className="font-outfit font-medium">MARKET</p>
        <p className="font-outfit font-medium">SELL</p>
        <p className="font-outfit font-medium">INFO</p>
        <span className="border-[0.5px] border-black px-0 mx-0"></span>
        <span className="flex items-center">
          <FaRegUser className="flex items-center stroke-2 text-lg" />
        </span>
        <span className="flex items-center">
          <HiOutlineShoppingBag className="flex items-center stroke-2 text-xl" />
        </span>
      </div>
    </div>
  );
}
