import React from "react";
import Image from "next/image";
import Product from "../public/product.svg";

const SoldItem = () => {
  return (
    <div className="flex justify-between my-3 font-oufit">
      <div className="text-rparts-subHeadingGray flex justify-cente items-center">
        1
      </div>

      <div className="flex gap-x-2">
        <div className="flex justify-center items-center w-16 mt-1">
          <Image src={Product} alt="Product" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-medium text-lg">ESP8266 WiFi Bee</div>
          <div className="flex text-sm gap-x-1">
            <p>Order Number:</p>
            <p className="font-medium">11-02408123120</p>
          </div>
          <div className="flex gap-x-1 text-sm">
            <p>Quantity:</p>
            <p className="font-medium gap-x-1">1</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-medium justify-center items-center text-lg">
        11/02/2021
      </div>
      <div className="flex flex-col font-medium justify-center items-center text-lg">
        $57.09
      </div>
    </div>
  );
};

export default SoldItem;
