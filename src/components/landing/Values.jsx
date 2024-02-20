import React from "react";
import Community from "../../../public/png/Community.png";
import Sustainability from "../../../public/png/Sustainability.png";
import Innovation from "../../../public/png/Innovation.png";
import Growth from "../../../public/png/Growth.png";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoEarthOutline, IoBulbOutline } from "react-icons/io5";
import { MdOutlineTrendingUp } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Values = () => {
  return (
    <div className="w-[80%] my-4">
      <div className="font-outfit text-xl font-semibold my-6">We Stand For</div>
      <div className="flex w-full justify-center space-x-7">
        <div className="flex flex-col gap-y-6 items-center">
          <Image src={Community} className="w-full" />
          <div className="w-full flex font-bebas text-4xl justify-between items-center">
            Community
            <HiOutlineUserGroup />
          </div>
          <div className="w-full font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
        </div>
        <div className=" flex flex-col gap-y-6 items-center">
          <Image src={Sustainability} className="w-full" />
          <div className="w-full flex font-bebas text-4xl justify-between items-center">
            Sustainability
            <IoEarthOutline />
          </div>
          <div className="w-full font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
        </div>
        <div className=" flex flex-col gap-y-6 items-center">
          <Image src={Innovation} className="w-full" />
          <div className="w-full flex font-bebas text-4xl justify-between items-center">
            Innovation
            <IoBulbOutline />
          </div>
          <div className="w-full font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-center">
          <Image src={Growth} className="w-full" />
          <div className="w-full flex font-bebas text-4xl justify-between items-center">
            Growth
            <MdOutlineTrendingUp />
          </div>
          <div className="w-full font-outfit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestilum
            convallis mi ut velit porttitor placerat. Nulla egestas magna.
          </div>
          <Link href="/info">
            <Button
              text="Learn More"
              color="bg-orange"
              rounded="full"
              size="sm"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Values;
