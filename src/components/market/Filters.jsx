import React from "react";
import { BiWalletAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Filters = () => {
  return (
    <div className="flex flex-col text-parts-gray-500 border-r border-parts-gray-400">
      <div className="py-3 pl-7 w-full ">Filter</div>
      <div className="py-3 gap-4 pl-7 items-center flex">
        <LuSettings size={20} />
        All Items
      </div>
      <div className="bg-parts-orange w-full gap-4 py-3 pl-7 text-white rounded-l-2xl rounded-r-none items-center flex">
        <BiWalletAlt size={20} />
        Kits
      </div>
      <div className="flex items-center gap-4 w-full py-3 pl-7">
        <BiCategoryAlt size={20} />
        Individual Parts
      </div>
    </div>
  );
};

export default Filters;
