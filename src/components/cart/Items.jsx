import React from "react";
import Item from "./Item";
import image from "../../../public/svg/cartItem.svg";
import { PiHandbagSimple } from "react-icons/pi";

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
      <p className="font-bebas text-3xl">MY SHOPPING BAG</p>
      <p className="font-outfit text-sm font-light text-parts-gray-500">
        View current items in cart and finalize before checkout
      </p>

      <div className="border-2 border-parts-gray-400 rounded-3xl flex justify-center items-center w-6/12 p-10 flex-col my-6">
        {Object.keys(selectedItem).length ? (
          <div>
            <Item
              name={selectedItem.item.name}
              description={selectedItem.item.description}
              condition={selectedItem.item.condition}
              price={selectedItem.item.price}
              image={image}
              itemCount={selectedItem.item.available}
            />
            <hr className="w-full my-4 bg-parts-gray-400 h-0.5" />
            <Item
              name={selectedItem.item.name}
              description={selectedItem.item.description}
              condition={selectedItem.item.condition}
              price={selectedItem.item.price}
              image={image}
              itemCount={selectedItem.item.available}
            />
            <hr className="w-full my-4 bg-parts-gray-400 h-0.5" />
            <Item
              name={selectedItem.item.name}
              description={selectedItem.item.description}
              condition={selectedItem.item.condition}
              price={selectedItem.item.price}
              image={image}
              itemCount={selectedItem.item.available}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <PiHandbagSimple className="text-9xl text-parts-gray-400 " />
            <p className="font-outfit font-light text-parts-gray-500 text-sm">
              Shopping Bag is Empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
