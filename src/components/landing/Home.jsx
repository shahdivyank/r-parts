import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Gallery from "./Gallery";
import arrow from "../../../public/svg/arrow.svg";

const Home = () => {
  return (
    <>
      <div className="w-[80%] font-outfit mb-10 mt-10">
        <p className="text-parts-gray-500 font-light text-xs">
          SECOND-HAND HARDWARE
        </p>
        <p className="text-parts-gray-600 text-6.5 font-bold">
          GIVE YOUR
          <span className="italic">
            {" "}
            OLD <br /> PARTS{" "}
          </span>
          <span className="text-parts-orange underline decoration-4 underline-offset-8 decoration-parts-orange">
            A NEW LIFE
          </span>
        </p>

        <div className="flex justify-center items-center my-5">
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis mi ut velit porttitor placerat. Nulla egestas mattis
            magna, ut luctus ligula mollis sit amet. Nam vitae leo dignissim.
          </p>
          <Image src={arrow} alt="arrow" className="mx-5 w-3/12" />
          <div className="flex items-center space-x-4">
            <Link href="/market">
              <Button
                text="GO TO MARKET"
                color="bg-orange"
                rounded="full"
                size="sm"
              />
            </Link>
            <Link href="/sell">
              <Button
                text="SELL AN ITEM"
                color="border-orange"
                rounded="full"
                size="sm"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-5 w-[80%]">
        <Gallery />
      </div>
    </>
  );
};

export default Home;
