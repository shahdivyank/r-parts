import React from "react";
import SoldItem from "./SoldItem";

const SoldItems = () => {
  return (
    <div className="w-[40%] flex flex-col justify-between p-10 border-[1px] border-rparts-borderGray rounded-3xl bg-rparts-wrappergGray font-outfit">
      <div className="flex flex-col font-medium gap-y-3">
        <p className="font-medium text-xl">Sold Items</p>
        <span className="justify-end border-[1px] border-rparts-borderGray" />
        <div className="flex w-full self-end justify-end text-xs font-light">
          <p className="mr-44">ITEM</p>
          <p className="mr-[5.7rem]">DATE SOLD</p>
          <p className="mr-2">TOTAL</p>
        </div>
      </div>
      <div className="gap-y-10">
        <SoldItem />
        <SoldItem />
      </div>
    </div>
  );
};

export default SoldItems;
