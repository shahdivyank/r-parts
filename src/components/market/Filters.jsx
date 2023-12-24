import React from "react";
import Wallet from "public/svg/wallet.svg";
import Category from "public/svg/category.svg";
import Setting from "public/svg/setting.svg";
import Image from "next/image";

const Filters = () => {
  return (
    <div className="flex relative w-full flex-col">
      <div className="flex flex-col  text-parts-gray-500">
        <div className="py-3 pl-7 w-full ">Filter</div>
        <div className="py-3 gap-4 pl-7 items-center flex">
          <Image src={Setting} />
          <div>All Items</div>
        </div>
        <div className="bg-parts-orange w-full gap-4 py-3 pl-7 text-white rounded-l-2xl rounded-r-none items-center flex">
          <Image src={Wallet} />
          <div>Kits</div>
        </div>
        <div className="items-center gap-4 w-full py-3 pl-7 flex">
          <Image src={Category} />
          <div>Individual Parts</div>
        </div>
      </div>
      <div className="absolute right-0 h-full border-r border-parts-gray-400 w-1"></div>
    </div>
  );
};

export default Filters;
