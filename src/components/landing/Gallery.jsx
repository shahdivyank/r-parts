import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { products } from "@/data/Landing";

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
      <FiArrowUpRight className="absolute right-0 outline outline-parts-gray-400 rounded-full text-4xl p-1 hover:rotate-12 hover:opacity-30 ease-in-out transition-all duration-300" />
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
    <div className="flex gap-x-6 w-10/12 justify-between h-[350px]">
      {/* FULL IMAGE */}
      <ProductImage item={products.item1} />

      {/* STACK */}
      <div className="w-1/4 flex flex-col gap-y-6 bg-red-500">
        <ProductImage item={products.item2} />
        <ProductInfo item={products.item2} />
      </div>

      {/* STACK */}
      <div className="w-1/4 flex flex-col gap-y-6">
        <ProductInfo item={products.item3} />
        <ProductImage item={products.item3} />
      </div>

      {/* FULL IMAGE */}
      <ProductImage item={products.item4} />
    </div>
  );
};

export default Gallery;
