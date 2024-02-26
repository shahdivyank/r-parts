"use client";
import Image from "next/image";
import React, { useState } from "react";
import placeholder from "/public/information-placeholder.webp";

const Images = ({ images }) => {
  const [image, setImage] = useState(placeholder);

  return (
    <div className=" w-full flex space-x-[5%]">
      <div className=" flex flex-col items-start gap-4 w-2/12">
        <Image
          src={images[0]}
          className="rounded-xl"
          onClick={() => setImage(images[0])}
        />
        <Image
          src={images[1]}
          className="rounded-xl"
          onClick={() => setImage(images[1])}
        />
        <Image
          src={images[2]}
          className="rounded-xl"
          onClick={() => setImage(images[2])}
        />
      </div>
      <Image src={image} className="rounded-3xl m-auto w-full" alt="" />
    </div>
  );
};

export default Images;
