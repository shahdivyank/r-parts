import React from "react";
import Item from "./Item";
import image from "../../../public/svg/cartItem.svg";
const Items = () => {
  const selectedItem = {
    item: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
      name: "ESP8266 WiFi Bee",
      condition: "New",
      available: 12,
      price: 59,
    },
  };
  return (
    <div>
      <p className="font-bebas text-5xl">MY SHOPPING BAG</p>
      <p className="font-outfit font-light text-parts-gray-500">
        View current items in cart and finalize before checkout
      </p>
      <div className="border-2 border-r-parts-gray-400 rounded-3xl flex justify-center items-center w-9/12 p-8 flex-col m-6">
        <Item
          name={selectedItem.item.name}
          description={selectedItem.item.description}
          condition={selectedItem.item.condition}
          price={selectedItem.item.price}
          image={image}
          itemCount={selectedItem.item.available}
        />
        <hr className="w-full h-1 m-4" />
        <Item
          name={selectedItem.item.name}
          description={selectedItem.item.description}
          condition={selectedItem.item.condition}
          price={selectedItem.item.price}
          image={image}
          itemCount={selectedItem.item.available}
        />
        <hr className="w-full h-1 m-4" />
        <Item
          name={selectedItem.item.name}
          description={selectedItem.item.description}
          condition={selectedItem.item.condition}
          price={selectedItem.item.price}
          image={image}
          itemCount={selectedItem.item.available}
        />
      </div>
    </div>
  );
};

export default Items;
