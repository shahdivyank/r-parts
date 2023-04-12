import React, { useState } from "react";
import { FaMinus, FaPlus, FaRegPaperPlane } from "react-icons/fa";

const ViewDescription = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <p className="font-bebasNeue text-4xl font-semibold">ESP8266 WIFI BEE</p>
      <p className="font-outfit text-xs">From ACM</p>
      <p className="font-outfit">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis mi ut velit porttitor placerat. Nulla egestas mattis magna, ut
        luctus ligula mollis sit amet. Nam vitae leo dignissim, sollicitudin
        eros in, consequat neque. Suspendisse potenti. Quisque in est mauris.
        Nullam ut sollicitudin ligula.
      </p>

      <p className="font-outfit mt-2">
        Condition: <span className="text-rparts-green">New</span>
      </p>
      <hr className="w-full h-1 mt-4" />

      <div className="flex items-center">
        <div className="flex justify-evenly items-center rounded-full border-2 border-rparts-borderGray w-fit p-2 mt-2">
          <FaMinus
            onClick={() => setQuantity(quantity - 1)}
            className="mr-2 hover:cursor-pointer"
          />
          <p className="mb-0 mx-4">{quantity}</p>
          <FaPlus
            onClick={() => setQuantity(quantity + 1)}
            className="ml-2 hover:cursor-pointer"
          />
        </div>
        <p className="text-rparts-orange font-semibold mx-4">
          {quantity} AVAILABLE
        </p>
      </div>
      <p className="font-outfit font-semibold text-3xl mt-2">$59.99</p>
      <button className="px-8 py-2 bg-rparts-orange font-outfit rounded-full text-white mt-4">
        ADD TO CART
      </button>

      <div className="border-2 border-rparts-borderGray rounded w-fit p-3 flex items-center mt-4">
        <FaRegPaperPlane className="mx-3 text-2xl" />
        <div className="font-outfit">
          <p className="font-semibold">Free Pickup Today at WCH127</p>
          <p>
            Schedule Pickup Time at Checkout.{" "}
            <span className="underline">Details.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDescription;