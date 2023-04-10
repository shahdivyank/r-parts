import React from "react";
import Image from "next/image";
import Product from "../public/product.svg";

const SoldItem = ({ entry, i }) => {
  return (
    <div className="flex justify-between my-3 font-oufit">
      <div className="text-rparts-subHeadingGray flex justify-cente items-center">
        {i}
      </div>

      <div className="flex gap-x-2">
        <div className="flex justify-center items-center w-16 mt-1">
          <Image src={Product} alt="Product" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-medium text-lg">{entry.title}</div>
          <div className="flex text-sm gap-x-1">
            <p>Order Number:</p>
            <p className="font-medium">{entry.orderNumber}</p>
          </div>
          <div className="flex gap-x-1 text-sm">
            <p>Quantity:</p>
            <p className="font-medium gap-x-1">{entry.quantity}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-medium justify-center items-center text-lg">
        {entry.date}
      </div>
      <div className="flex flex-col font-medium justify-center items-center text-lg">
        {entry.price}
      </div>
    </div>
  );
};

export default SoldItem;
