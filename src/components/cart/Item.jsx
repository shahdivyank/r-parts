"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxTrash } from "react-icons/rx";

const Item = ({ name, description, condition, price, image, itemCount }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="grid grid-cols-5">
      <div className="flex col-span-1">
        <Image src={image} width={150} />
      </div>
      <div className="flex flex-col col-span-3">
        <p className="font-outfit text-2xl font-base mb-4">{name}</p>
        <p className="font-outfit text-sm font-light">{description}</p>
        <p className="font-outfit text-sm font-light mt-2">
          Condition: &nbsp;
          <span className="text-parts-green font-semibold">{condition}</span>
        </p>
        <div className="flex justify-evenly items-center rounded-full border-2 border-parts-gray-400 font-light w-fit mt-2 px-2">
          <FaMinus
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            className="mr-2 text-xs hover:cursor-pointer"
          />
          <p className="mb-0 mx-8 text-sm">{quantity}</p>
          <FaPlus
            onClick={() => {
              if (quantity < parseInt(itemCount, 10)) {
                setQuantity(quantity + 1);
              }
            }}
            className="ml-2 text-xs hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col  items-end col-span-1">
        <p className="font-outfit font-base text-2xl mt-2  h-2/3">
          ${price}.00
        </p>
        <div className="flex">
          <RxTrash className=" text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Item;
