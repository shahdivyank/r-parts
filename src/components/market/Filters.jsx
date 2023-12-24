import React from "react";
import { BiWalletAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Filters = () => {
  return (
    <div className="flex relative w-full flex-col">
      <div className="flex flex-col  text-parts-gray-500">
        <div className="py-3 pl-7 w-full ">Filter</div>
        <div className="py-3 gap-4 pl-7 items-center flex">
          <LuSettings size={20} />
          <div>All Items</div>
        </div>
        <div className="bg-parts-orange w-full gap-4 py-3 pl-7 text-white rounded-l-2xl rounded-r-none items-center flex">
          <BiWalletAlt size={20} />
          <div>Kits</div>
        </div>
        <div className="items-center gap-4 w-full py-3 pl-7 flex">
          <BiCategoryAlt size={20} />
          <div>Individual Parts</div>
        </div>
      </div>
      <div className="absolute right-0 h-full border-r border-parts-gray-400 w-1"></div>
    </div>
  );
};

export default Filters;
