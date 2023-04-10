import React from "react";
import PurchasedItem from "./PurchasedItem";

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
      <div className="flex flex-col font-medium gap-y-3">
        <p className="font-medium text-xl">Past Purchases</p>
        <span className="justify-end border-[1px] border-rparts-borderGray" />
        <div className="flex w-full self-end justify-end text-xs font-light">
          <p className="mr-44">ITEM</p>
          <p className="mr-[5.7rem]">DATE SOLD</p>
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
