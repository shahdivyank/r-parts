import React from "react";
import Item from "./Item";

const items = new Array(10).fill(0);

const Items = () => {
  return (
    <div className="w-full grid grid-cols-4">
      {items.map((_, index) => (
        <Item key={index} />
      ))}
    </div>
  );
};

export default Items;
