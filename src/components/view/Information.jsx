import React from "react";

const Information = ({
  dimensions,
  weight,
  manufacturer,
  ASIN,
  country,
  modelNum,
  date,
  frequency,
}) => {
  return (
    <div className="py-6">
      <div className="font-semibold font-outfit text-2xl my-4">
        {" "}
        Product Information
      </div>
      <div className="grid grid-cols-2 w-6/12 justify-start divide-y divide-gray-300 font-outfit font-medium mb-8">
        <div className="bg-gray-200 pb-2 px-8 py-2 ">Product Dimensions</div>
        <div className="px-8 py-2 ">{dimensions}</div>
        <div className="bg-gray-200 px-8 py-2">Item Weight</div>
        <div className="px-8 py-2">{weight}</div>
        <div className="bg-gray-200 px-8 py-2">Manufacturer</div>
        <div className="px-8 py-2">{manufacturer}</div>
        <div className="bg-gray-200 px-8 py-2">ASIN</div>
        <div className="px-8 py-2">{ASIN}</div>
        <div className="bg-gray-200 px-8 py-2">Country of Origin</div>
        <div className="px-8 py-2">{country}</div>
        <div className="bg-gray-200 px-8 py-2">Item Model Number</div>
        <div className="px-8 py-2">{modelNum}</div>
        <div className="bg-gray-200 px-8 py-2">Date First Available</div>
        <div className="px-8 py-2">{date}</div>
        <div className="bg-gray-200 px-8 py-2">Frequency</div>
        <div className="px-8 py-2">{frequency}</div>
      </div>
    </div>
  );
};

export default Information;
