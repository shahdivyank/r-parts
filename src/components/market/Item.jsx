import React from "react";
import Image from "next/image";
import PlaceHolder from "../../../public/svg/item.svg";

const Item = () => {
  return (
    <div>
      <Image
        src={PlaceHolder}
        alt={"Item"}
        priority={true}
        draggable={false}
        className="object-cover rounded-xl w-1/6 h-1/"
      />
    </div>
  );
};

export default Item;
