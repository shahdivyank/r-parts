"use client";
import React, { useState } from "react";

const ViewImages = ({ images, first }) => {
  const [image, setImage] = useState(first);

  return (
    <div className="md:grid grid-cols-3 gap-4">
      <div className="flex flex-col items-center col-span-1 bg-blue-100">
        <div onClick={() => setImage(images[0])}>
          {" "}
          {/* <img src={images[0]} /> */}
          <img src={null} />
          image[0]
        </div>

        <div onClick={() => setImage(images[1])}>
          {/* <img src={images[1]} /> */}
          <img src={null} />
          image[1]
        </div>

        <div onClick={() => setImage(images[2])}>
          {/* <img src={images[2]} /> */}
          <img src={null} />
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
