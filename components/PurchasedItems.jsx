import React from "react";
import PurchasedItem from "./PurchasedItem";
import { RiArrowDropDownLine } from "react-icons/ri";

const purchasedItemsEntries = [
  {
    title: "ESP8266 WiFi Bee",
    orderNumber: "11-02408123120",
    quantity: "1",
    date: "11/02/2021",
    price: "$57.09",
  },
  {
    title: "ESP8266 WiFi Bee",
    orderNumber: "11-02408123120",
    quantity: "1",
    date: "11/02/2021",
    price: "$57.09",
  },
];

const PurchasedItems = () => {
  return (
    <div className="w-[40%] flex flex-col justify-between p-10 border-[1px] border-rparts-borderGray rounded-3xl bg-rparts-wrappergGray font-outfit">
      <div className="flex flex-col font-medium">
        <div className="flex w-full justify-between">
          <p className="font-medium text-2xl">Past Purchases</p>
          <RiArrowDropDownLine className="text-5xl" />
        </div>
        <span className="justify-end border-[1px] border-rparts-borderGray mb-3" />
        <div className="flex w-full self-end justify-end text-xs font-light">
          <p className="mr-44">ITEM</p>
          <p className="mr-[4.9rem]">ORDER PLACED</p>
          <p className="mr-2">TOTAL</p>
        </div>
      </div>
      {purchasedItemsEntries.map((entry, i) => (
        <PurchasedItem key={i} entry={entry} i={i + 1} />
      ))}
    </div>
  );
};

export default PurchasedItems;
