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
      {/* Title and description */}

      <div>
        <p>Lorem ipsum dolor</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscin elit. Vestibulum
          convallis
        </p>
      </div>

      {/* Price and Condition */}

      <div className="flex flex-row">
        <span>$0.00</span>
        <span>$0.00</span>
        <div>Condition: New</div>
      </div>
    </div>
  );
};

export default Item;
