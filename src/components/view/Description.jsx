"use client";
import React, { useState } from "react";
import toaster from "@/utils/toaster";
import { FaMinus, FaPlus } from "react-icons/fa";
import product from "../../../public/svg/cartItem.svg";

const Description = () => {
  const [quantity, setQuantity] = useState(1);

  const selectedItem = {
    data: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat. Nulla egestas mattis magna, ut luctus ligula mollis sit amet. Nam vitae leo dignissim, sollicitudin eros in, consequat neque. Suspendisse potenti. Quisque in est mauris. Nullam ut sollicitudin ligula.",
      title: "ESP8266 WIFI BEE",
      condition: "New",
      available: 12,
      price: 59,
      image: product,
    },
  };

  return (
    <div>
      <p className="font-bebas text-4xl font-semibold mb-4">
        {selectedItem.data.title}
      </p>
      <p className="font-outfit font-light">{selectedItem.data.description}</p>

      <p className="font-outfit mt-2">
        Condition:{" "}
        <span className="text-parts-green">{selectedItem.data.condition}</span>
      </p>
      <hr className="w-full h-1 mt-4" />

      <div className="flex items-center">
        <div className="flex justify-evenly items-center rounded-full border-2 border-parts-gray-400 w-fit p-2 mt-2">
          <FaMinus
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            className="mr-2 hover:cursor-pointer"
          />
          <p className="mb-0 mx-4">{quantity}</p>
          <FaPlus
            onClick={() => {
              if (quantity < parseInt(selectedItem.data.available, 10)) {
                setQuantity(quantity + 1);
              }
            }}
            className="ml-2 hover:cursor-pointer"
          />
        </div>
        <p className="text-parts-orange font-semibold mx-4">
          {selectedItem.data.available} AVAILABLE
        </p>
      </div>
      <p className="font-outfit font-semibold text-3xl mt-2">
        ${selectedItem.data.price}.00
      </p>
      <button
        className="px-8 py-2 bg-parts-orange font-outfit rounded-full text-white mt-4 cursor-pointer"
        onClick={() => {
          toaster(
            selectedItem.data.image,
            selectedItem.data.title,
            selectedItem.data.price,
            quantity,
            selectedItem.data.condition,
          );
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Description;
