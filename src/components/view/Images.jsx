"use client";
import Image from "next/image";
import React, { useState } from "react";

const ViewImages = ({ images, first }) => {
  const [image, setImage] = useState(first);

  return (
    <div className="md:grid grid-cols-3 gap-4">
      <div className="flex flex-col items-center col-span-1 bg-blue-100">
        <div>
          <Image onClick={() => setImage(images[0])} />
          image[0]
        </div>

        <div>
          <Image onClick={() => setImage(images[1])} />
          image[1]
        </div>

        <div>
          <Image onClick={() => setImage(images[2])} />
          image[2]
        </div>
      </div>
      <div className="col-span-2 bg-blue-100">
        <img src={image} />
        hero
      </div>
    </div>
  );
};

export default ViewImages;
