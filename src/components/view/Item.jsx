import React from "react";
import ViewDescription from "./Description";
import ViewImages from "./Images";

const Item = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-10/12">
        <p className="font-outfit text-parts-gray-500 mb-8">MARKET / PRODUCT</p>
        <div className="md:grid grid-cols-5 gap-8">
          <div className="col-span-3">
            <ViewImages images={null} first={null} />
          </div>
          <div className="col-span-2">
            <ViewDescription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
