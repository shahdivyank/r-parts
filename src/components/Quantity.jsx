"use client";
import React from "react";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const selectedItem = {
    data: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat. Nulla egestas mattis magna, ut luctus ligula mollis sit amet. Nam vitae leo dignissim, sollicitudin eros in, consequat neque. Suspendisse potenti. Quisque in est mauris. Nullam ut sollicitudin ligula.",
      title: "ESP8266 WIFI BEE",
      condition: "New",
      available: 12,
      price: 59,
    },
  };
  return (
    <div>
      <div className="flex justify-evenly items-center rounded-full border-2 border-parts-gray-400 font-light w-fit mt-4 px-2">
        <FiMinus
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          className="mr-3 hover:cursor-pointer text-xsfont-thin"
        />
        <p className="mb-0 mx-4">{quantity}</p>
        <FiPlus
          onClick={() => {
            if (quantity < parseInt(selectedItem.data.available, 10)) {
              setQuantity(quantity + 1);
            }
          }}
          className="ml-3 hover:cursor-pointer text-xs font-thin"
        />
      </div>
    </div>
  );
};

export default Quantity;
