import React from "react";
import Community from "../../../public/png/Community.png";
import Sustainability from "../../../public/png/Sustainability.png";
import Innovation from "../../../public/png/Innovation.png";
import Growth from "../../../public/png/Growth.png";
import CommunityIcon from "../../../public/png/CommunityIcon.png";
import Image from "next/image";

const Values = () => {
  return (
    <div className="w-11/12 my-4">
      <div className="font-outfit text-xl font-semibold my-6">We Stand For</div>
      <div className="flex w-full justify-center">
        <div className="w-1/4 flex flex-col gap-y-6 items-center">
          <Image src={Community} className="w-5/6" />
          <div className="w-5/6 flex font-bebas text-4xl justify-between items-center">
            Community
            <Image src={CommunityIcon} />
          </div>
          <div className="w-5/6 font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-y-6 items-center">
          <Image src={Sustainability} className="w-5/6" />
          <div className="w-5/6 flex font-bebas text-4xl justify-between items-center">
            Sustainability
            <Image src={CommunityIcon} />
          </div>
          <div className="w-5/6 font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-y-6 items-center">
          <Image src={Innovation} className="w-5/6" />
          <div className="w-5/6 flex font-bebas text-4xl justify-between items-center">
            Innovation
            <Image src={CommunityIcon} />
          </div>
          <div className="w-5/6 font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-y-6 items-center">
          <Image src={Growth} className="w-5/6" />
          <div className="w-5/6 flex font-bebas text-4xl justify-between items-center">
            Growth
            <Image src={CommunityIcon} />
          </div>
          <div className="w-5/6 font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
          <div className="w-3/4 flex justify-end my-2">
            <a href="/info">
              <button className="bg-parts-orange rounded-3xl text-white font-outfit py-2 px-6 hover:bg-[#FFA34F]">
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
