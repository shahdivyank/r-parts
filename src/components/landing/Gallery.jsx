import Image from "next/image";
import React from "react";
import Link from "next/link";
import item from "../../../public/svg/item.svg";
import { FiArrowUpRight } from "react-icons/fi";

export const products = {
  item1: {
    title: "item",
    image: item,
    alt: "item",
    stack: false,
  },
  item2: {
    title: "Lorem ipsum dolor",
    oldPrice: "$00.00",
    newPrice: "$00.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat. Nulla egestas mattis magna, ut luctus ligula mollis sit amet. Nam vitae leo dignissim, sollicitudin eros in.",
    image: item,
    alt: "item",
    stack: true,
  },
  item3: {
    title: "Lorem ipsum dolor",
    oldPrice: "$00.00",
    newPrice: "$00.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat. Nulla egestas mattis magna, ut luctus ligula mollis sit amet. Nam vitae leo dignissim, sollicitudin eros in.",
    image: item,
    alt: "item",
    stack: true,
  },
  item4: {
    title: "item",
    image: item,
    alt: "item",
    stack: false,
  },
};

const ProductImage = ({ item }) => (
  <div className={`${item?.stack ? `w-full h-[60%]` : `w-1/4`} relative`}>
    <Image
      src={item?.image}
      alt={item?.alt}
      priority={true}
      fill
      draggable={false}
      className="object-cover rounded-xl"
    />
  </div>
);

const ProductInfo = ({ item }) => (
  <div className="w-full h-[40%] p-2 flex flex-col rounded-xl relative">
    <Link href="/market">
      <FiArrowUpRight className="absolute right-0 outline outline-parts-gray-400 rounded-full text-4xl p-1" />
    </Link>
    <p className="text-black font-semibold">{item.title}</p>
    <div className="font-semibold text-sm">
      <span className="text-parts-gray-500 line-through">{item.oldPrice}</span>
      <span className="text-black"> {item.newPrice}</span>
    </div>
    <p className="font-light text-sm mt-5">{item.description}</p>
  </div>
);

const Gallery = () => {
  return (
    <div className="flex gap-x-6 w-full justify-between h-[500px]">
      {/* FULL HEIGHT */}
      <ProductImage item={products.item1} />

      {/* STACK */}
      <div className="w-1/4 flex flex-col gap-y-6">
        <ProductImage item={products.item2} />
        <ProductInfo item={products.item2} />
      </div>

      {/* STACK */}
      <div className="w-1/4 flex flex-col gap-y-6">
        <ProductInfo item={products.item3} />
        <ProductImage item={products.item3} />
      </div>

      {/* FULL HEIGHT */}
      <ProductImage item={products.item4} />
    </div>
  );
};

export default Gallery;
