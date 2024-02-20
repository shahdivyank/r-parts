import Image from "next/image";
import iPhone12TopHalf from "../../../public/Works/iPhone12_tophalf.webp";
import iPhone12TopLeft from "../../../public/Works/iPhone12_topleft.webp";
import iPhone12BottomHalf from "../../../public/Works/iPhone12_bottomhalf.webp";
import React from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";

const Works = () => {
  return (
    <div className="w-[80%]">
      <div className="text-xl font-outfit font-medium">How It Works</div>
      <div className="mt-7 md:grid grid-cols-4 gap-7">
        <div className="bg-parts-orange col-span-2 rounded-3xl pb-[10rem] pl-12 pr-8 pt-12">
          <div className="flex gap-1 text-[0.8rem]">
            <FaCircle className="text-white" />
            <FaRegCircle className="text-white" />
            <FaRegCircle className="text-white" />
          </div>
          <div className="text-5xl text-white mt-6 font-bebas">
            IT STARTS WITH <span className="underline">YOU</span>
          </div>
          <div className="text-white text-base font-outfit font-extralight mt-2 max-w-[26rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className="m-auto md:grid grid-cols-2 gap-4 mb-[-7rem] pt-[15rem] ">
            <Link href="/sell">
              <Button
                text="LIST YOUR PART"
                color="white"
                rounded="full"
                size="sm"
              />
            </Link>
            <div className="col-span-1 rounded-xl mt-[-14rem] mb-[-3rem] text-center">
              <Image src={iPhone12TopHalf} className="w-full mb-[rem]" />
            </div>
          </div>
        </div>
        <div className="bg-parts-gray-200 col-span-1 rounded-xl pl-8 pr-8">
          <div className="mb-5 col-span-1 rounded-xl max-w-[24rem] ml-10">
            <Image src={iPhone12BottomHalf} className="" />
          </div>
          <div className="flex gap-1 text-[0.8rem]">
            <FaCircle className="text-parts-orange" />
            <FaCircle className="text-parts-orange" />
            <FaRegCircle className="text-parts-gray-400" />
          </div>
          <div className="text-5xl font-bebas text-parts-gray-600 mt-2">
            <span className="underline">WE</span> REFURBISH
          </div>
          <div className="text-parts-gray-600 font-outfit font-extralight mt-2 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur
            adipiscing
          </div>
        </div>
        <div className="bg-parts-gray-200 col-span-1 rounded-xl p-8">
          <div className="flex gap-1 text-[0.8rem] mb-4">
            <FaCircle className="text-parts-orange" />
            <FaCircle className="text-parts-orange" />
            <FaCircle className="text-parts-orange" />
          </div>
          <div className="text-5xl font-bebas text-parts-gray-600 mb-2">
            <span className="underline">TOGETHER</span> <br />
            WE GIVE BACK
          </div>
          <div className="text-parts-gray-600 font-outfit font-extralight text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="m-auto md:grid grid-cols-2 gap-8 mb-[-7rem] pt-[15rem]">
            <Link href="/market">
              <Button
                text="SHOP NOW"
                color="bg-orange"
                rounded="full"
                size="sm"
              />
            </Link>
            <div className=" col-span-1 rounded-xl mt-[-14rem] mb-[-1rem] mr-[-2rem] text-center">
              <Image src={iPhone12TopLeft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
