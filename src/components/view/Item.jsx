import React from "react";
import Description from "./Description";
import Images from "./Images";
import { products } from "@/data/productImages";

const Item = () => {
  return (
    <>
      <p className="font-outfit text-parts-gray-500 text-sm font-light pb-2">
        MARKET / PRODUCT
      </p>
      <div className="gap-8 mt-8 flex">
        <Images images={products} />
        <Description />
      </div>
    </>
  );
};

export default Item;
