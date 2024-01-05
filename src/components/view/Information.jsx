import React from "react";

const Information = ({
  dimensions,
  weight,
  manufacturer,
  country,
  unitPrice,
  totalPrice,
}) => {
  return (
    <div className="grid grid-cols-2 w-6/12 justify-start divide-y divide-gray-400 font-outfit mb-8">
      <div className="bg-gray-200 pb-2 px-8 py-2 font-semibold">
        Product Dimensions
      </div>
      <div className="px-8 py-2">{dimensions}</div>
      <div className="bg-gray-200 px-8 py-2 font-semibold">Weight</div>
      <div className="px-8 py-2">{weight}</div>
      <div className="bg-gray-200 px-8 py-2 font-semibold">Manufacturer</div>
      <div className="px-8 py-2">{manufacturer}</div>
      <div className="bg-gray-200 px-8 py-2 font-semibold">Country</div>
      <div className="px-8 py-2">{country}</div>
      <div className="bg-gray-200 px-8 py-2 font-semibold">Unit Price</div>
      <div className="px-8 py-2">{unitPrice}</div>
      <div className="bg-gray-200 px-8 py-2 font-semibold">Total Price</div>
      <div className="px-8 py-2">{totalPrice}</div>
    </div>
  );
};

export default Information;
