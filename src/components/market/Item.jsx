import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlaceHolder from "../../../public/png/placeholder.png";

const Item = () => {
  return (
    <div className="w-1/4 flex flex-col py-2 px-2">
      <Link href="/view">
        <Image
          src={PlaceHolder}
          alt={"Item"}
          draggable={false}
          className="rounded-xl w-full"
        />

        <p className="text-black font-semibold text-lg">Lorem ipsum dolor</p>
        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscin elit. Vestibulum
          convallis
        </p>

        <div className="flex flex-row justify-between pt-2 text-sm">
          <div className="font-semibold ">
            <span className="text-parts-gray-500 line-through pr-2">
              $00.00
            </span>
            <span className="text-black">$00.00</span>
          </div>
          <p>
            Condition:{" "}
            <span className="text-parts-green font-semibold">New</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
