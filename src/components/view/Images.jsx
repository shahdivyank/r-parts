"use client";
import Image from "next/image";
import React, { useState } from "react";
import placeholder from "/public/information-placeholder.webp";

const Images = ({ images, first }) => {
  first = placeholder;
  const [image, setImage] = useState(first);

  return (
    <div className="md:grid grid-cols-3">
      <div className="flex flex-col items-center col-span-1 gap-4">
        <Image
          src={placeholder}
          className="w-1/3 rounded-xl"
          onClick={() => setImage(images[0])}
        />
        <Image
          src={placeholder}
          className="w-1/3 rounded-xl"
          onClick={() => setImage(images[1])}
        />
        <Image
          src={placeholder}
          className="w-1/3 rounded-xl"
          onClick={() => setImage(images[2])}
        />
      </div>
      <div className="col-span-2">
        <Image src={image} className="rounded-3xl m-auto w-full" alt="" />
      </div>
    </div>
  );
};

export default Images;
