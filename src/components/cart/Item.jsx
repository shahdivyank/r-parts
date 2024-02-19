"use client";
import React from "react";
import Image from "next/image";
import { RxTrash } from "react-icons/rx";
import Quantity from "../Quantity";

const Item = ({
  id,
  name,
  description,
  condition,
  price,
  image,
  itemCount,
  setItems,
}) => {
  return (
    <div className="grid grid-cols-4">
      <div className="flex col-span-1 row-span-full justify-center items-center aspect-square">
        <Image src={image} width={150} />
      </div>
      <div className="flex flex-col col-span-2 ml-4">
        <p className="font-outfit text-base">{name}</p>
        <p className="font-outfit text-xs font-light">{description}</p>
        <p className="font-outfit text-xs font-light">
          Condition: &nbsp;
          <span className="text-parts-green font-semibold">{condition}</span>
        </p>
        <div className="flex items-center">
          <Quantity />
        </div>
      </div>
      <div className="flex flex-col  items-end col-span-1">
        <div className="font-outfit font-base text-base mt-2  h-2/3">
          ${price}.00
        </div>
        <RxTrash
          onClick={() =>
            setItems((prev) => prev.filter((item) => item.id !== id))
          }
          className=" text-xl hover:text-red-500 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Item;
