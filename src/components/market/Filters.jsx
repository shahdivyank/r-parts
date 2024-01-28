"use client";
import React, { useState } from "react";
import { BiWalletAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Filters = () => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex flex-col text-parts-gray-500 border-r border-parts-gray-400">
      <div className="py-3 pl-7 w-full ">Filter</div>
      <div
        onClick={() => setSelected("all")}
        className={`${
          selected === "all" &&
          `bg-parts-orange text-white  rounded-l-2xl rounded-r-none`
        } py-3 gap-4 pl-7 items-center flex cursor-pointer`}
      >
        <LuSettings size={20} />
        All Items
      </div>
      <div
        onClick={() => setSelected("kits")}
        className={`${
          selected === "kits" &&
          `bg-parts-orange text-white  rounded-l-2xl rounded-r-none`
        } w-full gap-4 py-3 pl-7 items-center flex cursor-pointer`}
      >
        <BiWalletAlt size={20} />
        Kits
      </div>
      <div
        onClick={() => setSelected("individual")}
        className={`${
          selected === "individual" &&
          `bg-parts-orange text-white  rounded-l-2xl rounded-r-none`
        } flex items-center gap-4 w-full py-3 pl-7 cursor-pointer`}
      >
        <BiCategoryAlt size={20} />
        Individual Parts
      </div>
    </div>
  );
};

export default Filters;
