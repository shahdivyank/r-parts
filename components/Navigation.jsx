import React from "react";
import { BsGear } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center my-3 mx-12">
      <div className="flex w-1/3 justify-around">
        <span className="flex items-center text-2xl font-medium gap-x-2">
          <BsGear className="stroke-0" /> {"R'Parts"}
        </span>
        <div className="w-2/3 flex items-center justify-between border-[1px] border-[#D9D9D9] px-4 py-2 rounded-3xl">
          <p className="text-[#858585]">Search {"R'Parts"}</p>
          <p className="text-[#858585]">
            <RiSearchLine />
          </p>
        </div>
      </div>
      <div className="flex w-1/6 justify-between">
        <div className="flex gap-x-6">
          <p className="font-medium">Market</p>
          <p className="font-medium">Sell</p>
          <p className="font-medium">Info</p>
        </div>
        <span className="border-[0.5px] border-black px-0 mx-0"></span>
        <div className="flex gap-x-6">
          <span className="flex items-center">
            <FaRegUser className="flex items-center stroke-2 text-lg" />
          </span>
          <span className="flex items-center">
            <HiOutlineShoppingBag className="flex items-center stroke-2 text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
}
