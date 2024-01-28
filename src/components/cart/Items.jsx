import React from "react";
import Item from "./Item";
import image from "../../../public/svg/cartItem.svg";
import { PiHandbagSimple } from "react-icons/pi";

const items = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    name: "ESP8266 WiFi Bee",
    condition: "New",
    available: 12,
    price: 59,
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    name: "ESP8266 WiFi Bee",
    condition: "New",
    available: 12,
    price: 59,
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    name: "ESP8266 WiFi Bee",
    condition: "New",
    available: 12,
    price: 59,
  },
];

const Items = () => {
  return (
    <div>
      <p className="font-bebas text-3xl">MY SHOPPING BAG</p>
      <p className="font-outfit text-sm font-light text-parts-gray-500">
        View current items in cart and finalize before checkout
      </p>

      <div className="border-2 border-parts-gray-400 rounded-3xl flex justify-center items-center w-6/12 p-10 flex-col my-6">
        {items.map(({ name, description, condition, price, available }) => (
          <>
            <Item
              name={name}
              description={description}
              condition={condition}
              price={price}
              image={image}
              itemCount={available}
            />
            <hr className="w-full my-4 bg-parts-gray-400 h-0.5" />
          </>
        ))}

        {items.length === 0 && (
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
