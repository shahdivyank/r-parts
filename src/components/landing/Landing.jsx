import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Gallery from "./Gallery";
import arrow from "../../../public/svg/arrow.svg";

const Landing = () => {
  return (
    <div className="p-20 font-outfit">
      <div>
        {/* HERO HEADING */}
        <p className="text-parts-gray-500 font-light text-sm">
          SECOND-HAND HARDWARE
        </p>
        <p className="text-parts-gray-600 text-8xl font-bold">
          GIVE YOUR
          <span className="italic">
            {" "}
            OLD <br /> PARTS{" "}
          </span>
          <span className="text-parts-orange underline underline-offset-4 decoration-parts-orange">
            A NEW LIFE
          </span>
        </p>

        {/* HERO DESCRIPTION */}
        <div className="flex w-full justify-between items-center mt-5 mb-14">
          <p className="w-[560px] font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis mi ut velit porttitor placerat. Nulla egestas mattis
            magna, ut luctus ligula mollis sit amet. Nam vitae leo dignissim,
            sollicitudin eros in, consequat neque. Suspendisse potenti.
          </p>
          <Image src={arrow} alt="arrow" />
          <div className="flex gap-x-5">
            <Link href="/market">
              <Button
                text={"GO TO MARKET"}
                color="bg-orange"
                rounded="full"
                size="sm"
              />
            </Link>
            <Link href="/sell">
              <Button
                text={"SELL AN ITEM"}
                color="border-orange"
                rounded="full"
                size="sm"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* PRODUCT GALLERY */}
      <Gallery />
    </div>
  );
};

export default Landing;
