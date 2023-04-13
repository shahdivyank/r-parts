import React from "react";
import { BsGear } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center my-3 mx-12 font-outfit">
      <div className="flex w-1/3 justify-around">
        <Link
          href="/"
          className="flex items-center text-2xl font-medium gap-x-2 font-montserrat hover:text-black"
        >
          <BsGear className="stroke-[0.5px] rotate-12" />
          <div className="flex">
            <p>{"R'P"}</p>
            <p className="italic">A</p>
            <p>RTS</p>
          </div>
        </Link>
        <div className="w-2/3 flex items-center justify-between border-[1px] border-rparts-borderGray px-4 py-2 rounded-3xl">
          <input
            className="w-full focus:outline-none"
            type="search"
            placeholder={"Search R'Parts"}
          />
          <RiSearchLine className="text-rparts-subheadingGray" />
        </div>
      </div>
      <div className="flex gap-x-10 justify-between">
        <Link
          href="/"
          className="flex items-center hover:text-rparts-subheadingGray font-medium"
        >
          MARKET
        </Link>
        <Link
          href="/"
          className="flex items-center hover:text-rparts-subheadingGray font-medium"
        >
          SELL
        </Link>
        <Link
          href="/"
          className="flex items-center hover:text-rparts-subheadingGray font-medium"
        >
          INFO
        </Link>
        <span className="border-[0.5px] border-black px-0 mx-0" />
        <Link
          href="/profile"
          className="flex items-center hover:text-rparts-subheadingGray"
        >
          <FaRegUser className="flex items-center stroke-2 text-xl" />
        </Link>
        <Link
          href="/"
          className="flex items-center hover:text-rparts-subheadingGray"
        >
          <HiOutlineShoppingBag className="flex items-center stroke-2 text-2xl" />
        </Link>
      </div>
    </div>
  );
}
