import React from "react";
import Image from "next/image";
import PlaceHolder from "../../../public/svg/item.svg";

const Item = () => {
  return (
    <div className="bg-blue-500 w-1/4">
      <Image
        src={PlaceHolder}
        alt={"Item"}
        draggable={false}
        width={200}
        height={50}
        className="rounded-xl"
      />
      {/* Title and description */}

      <div>
        <p className="text-black font-semibold">Lorem ipsum dolor</p>
        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscin elit. Vestibulum
          convallis
        </p>
      </div>

      {/* Price and Condition */}

      <div className="flex flex-row justify-between">
        <div className="font-semibold ">
          <span className="text-parts-gray-500 line-through">$00.00</span>
          <span className="text-black">$00.00</span>
        </div>
        <p>
          Condition: <span className="text-parts-green">New</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
