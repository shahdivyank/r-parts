import React from "react";
import Description from "./Description";
import Images from "./Images";
import { products } from "@/data/productImages";

const Item = () => {
  return (
    <>
      <p className="font-outfit text-parts-gray-500 border-b-[1px] border-gray-300 pb-2">
        MARKET / PRODUCT
      </p>
      <div className="md:grid grid-cols-5 gap-8 mt-8">
        <div className="col-span-3">
          <Images images={products} />
        </div>
        <div className="col-span-2">
          <Description />
        </div>
      </div>
    </>
  );
};

export default Item;
