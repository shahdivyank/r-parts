"use client";
import Image from "next/image";
import React, { useState } from "react";
import placeholder from "/public/information-placeholder.webp";

const Images = ({ images }) => {
  const [image, setImage] = useState(placeholder);

  return (
    <div className="md:grid grid-cols-3">
      <div className="flex flex-col items-center col-span-1 gap-4">
        <Image
          src={images[0]}
          className="w-1/3 rounded-xl"
          onClick={() => setImage(images[0])}
        />
        <Image
          src={images[1]}
          className="w-1/3 rounded-xl"
          onClick={() => setImage(images[1])}
        />
        <Image
          src={images[2]}
          className="w-1/3 rounded-xl"
          onClick={() => setImage(images[2])}
        />
      </div>
      <Image
        src={image}
        className="col-span-2 rounded-3xl m-auto w-full"
        alt=""
      />
    </div>
  );
};

export default Images;
