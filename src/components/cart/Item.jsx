"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxTrash } from "react-icons/rx";

const Item = ({ name, description, condition, price, image, itemCount }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-5">
      <div className="flex col-span-1 row-span-full justify-center items-center aspect-square">
        <Image src={image} width={150} />
      </div>
      <div className="flex flex-col col-span-3 ml-4">
        <p className="font-outfit text-base">{name}</p>
        <p className="font-outfit text-xs font-light">{description}</p>
        <p className="font-outfit text-xs font-light">
          Condition: &nbsp;
          <span className="text-parts-green font-semibold">{condition}</span>
        </p>
        <div className="flex justify-evenly items-center rounded-full border-2 border-parts-gray-400 font-light w-fit mt-4 px-2">
          <FaMinus
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            className="mr-2 text-xs hover:cursor-pointer"
          />
          <p className="mb-0 mx-4 text-xs">{quantity}</p>
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
        <p className="font-outfit font-base text-base mt-2  h-2/3">
          ${price}.00
        </p>
        <RxTrash
          onClick={null}
          className=" text-xl hover:text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Item;
