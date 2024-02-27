import React from "react";
import Link from "next/link";
import { BsGear } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navigation = () => {
  return (
    <div className="flex w-11/12 justify-between items-center font-outfit my-6">
      <div className="flex gap-x-10 w-1/2 ">
        <Link
          href={"/"}
          className="flex items-center text-2xl font-montserrat font-medium hover:cursor-pointer"
        >
          <BsGear className="stroke-[0.5px] rotate-12 mr-2" />
          <span>{"R'P"}</span>
          <span className="italic">A</span>RTS
        </Link>
        <div className="flex w-1/2 items-center justify-between border-1 border-gray-300 border-parts-500 px-4 py-1 rounded-3xl text-parts-gray-500">
          <RiSearchLine />
          <input
            className="w-full px-5 bg-parts-gray-100 text-gray-500 font-outfit focus:outline-none placeholder-gray"
            placeholder={"Search R'Parts"}
          />
        </div>{" "}
      </div>
      <div className="flex gap-x-10 justify-between font-outfit font-medium">
        <Link
          href={"/market"}
          className="hover:text-parts-gray-500 transition-all duration-300 cursor-pointer"
        >
          MARKET
        </Link>
        <Link
          href={"/sell"}
          className="hover:text-parts-gray-500 transition-all duration-300 cursor-pointer"
        >
          SELL
        </Link>
        <Link
          href={"/info"}
          className="hover:text-parts-gray-500 transition-all duration-300 cursor-pointer"
        >
          INFO
        </Link>
        <span className="border-[0.5px] border-black"></span>
        {/* <span className="flex items-center"> */}
        <Link href={"/profile"}>
          <FaRegUser className="flex items-center stroke-2 text-lg hover:text-parts-gray-500 transition-all duration-300 cursor-pointer" />
        </Link>
        <Link href={"/cart"}>
          <HiOutlineShoppingBag className="flex items-center stroke-2 text-xl hover:text-parts-gray-500 transition-all duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
