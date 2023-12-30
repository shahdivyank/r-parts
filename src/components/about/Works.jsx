import Image from "next/image";
import React from "react";

function EllipsisCircle({
  color = "transparent",
  hasOutline,
  borderColor = "none",
}) {
  const ellipsisStyle = {
    backgroundColor: color,
    border: hasOutline ? "1px solid white" : "none",
    borderColor: hasOutline ? borderColor : "none",
  };

  return (
    <div className="w-3 h-3 rounded-full mx-0.5" style={ellipsisStyle}></div>
  );
}

const Works = () => {
  return (
    <div className="max-w-[92rem] m-auto">
      <div className="text-2xl font-outfit font-normal">How It Works</div>
      <div className="mt-8 md:grid grid-cols-4 gap-8">
        <div className="bg-parts-orange col-span-2 rounded-3xl pb-[10rem] pl-16 pr-8 pt-14">
          <div className="flex">
            <EllipsisCircle color="white" />
            <EllipsisCircle hasOutline />
            <EllipsisCircle hasOutline />
          </div>
          <div className="text-6xl text-white mt-6 font-bebas">
            IT STARTS WITH <span className="underline">YOU</span>
          </div>
          <div className="text-white font-outfit font-extralight mt-2 max-w-[26rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className="m-auto md:grid grid-cols-2 gap-4 mb-[-7rem] pt-[15rem] ">
            <button className="font-outfit bg-white text-parts-orange col-span-1 py-2 px-2 w-[200px] rounded-full cursor-pointer">
              LIST YOUR PART
            </button>
            <div className="bg-blue-100 col-span-1 rounded-xl mt-[-14rem] mb-[-3rem] text-center">
              image here
              <Image />
            </div>
          </div>
        </div>
        <div className="bg-parts-gray-200 col-span-1 rounded-xl pl-8 pr-8">
          <div className="bg-blue-100 mb-5 mr-[-1rem] pb-52 col-span-1 rounded-xl max-w-[24rem] text-center">
            image here
            <Image />
          </div>
          <div className="flex">
            <EllipsisCircle color="#FF8F28" />
            <EllipsisCircle color="#FF8F28" />
            <EllipsisCircle hasOutline borderColor="#D9D9D9" />
          </div>
          <div className="text-5xl font-bebas text-[#434343] mt-2">
            <span className="underline">WE</span> REFURBISH
          </div>
          <div className="text-[#434343] font-outfit font-extralight mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur
            adipiscing
          </div>
        </div>
        <div className="bg-parts-gray-200 col-span-1 rounded-xl p-8">
          <div className="flex mb-4">
            <EllipsisCircle color="#FF8F28" />
            <EllipsisCircle color="#FF8F28" />
            <EllipsisCircle color="#FF8F28" />
          </div>
          <div className="text-5xl font-bebas text-[#434343] mb-2">
            <span className="underline">TOGETHER</span> <br />
            WE GIVE BACK
          </div>
          <div className="text-[#434343] font-outfit font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="m-auto md:grid grid-cols-2 gap-8 mb-[-7rem] pt-[15rem]">
            <button className="bg-parts-orange text-white col-span-1 py-2 px-2 w-[8rem] rounded-full cursor-pointer">
              SHOP NOW
            </button>
            <div className="bg-blue-100 col-span-1 rounded-xl mt-[-14rem] mb-[-1rem] mr-[-2rem] text-center">
              image here
              <Image />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
