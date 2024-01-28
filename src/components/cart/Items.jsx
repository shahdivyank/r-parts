"use client";
import { useState } from "react";
import Item from "./Item";
import image from "../../../public/svg/cartItem.svg";
import { PiHandbagSimple } from "react-icons/pi";

const mock = [
  {
    id: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    name: "ESP8266 WiFi Bee",
    condition: "New",
    available: 12,
    price: 59,
  },
  {
    id: "2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    name: "ESP8266 WiFi Bee",
    condition: "New",
    available: 12,
    price: 59,
  },
  {
    id: "3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    name: "ESP8266 WiFi Bee",
    condition: "New",
    available: 12,
    price: 59,
  },
];

const Items = () => {
  const [items, setItems] = useState(mock);
  return (
    <div>
      <p className="font-bebas text-3xl">MY SHOPPING BAG</p>
      <p className="font-outfit text-sm font-light text-parts-gray-500">
        View current items in cart and finalize before checkout
      </p>

      <div className="border-2 border-parts-gray-400 rounded-3xl flex justify-center items-center w-6/12 p-10 flex-col my-6">
        {items.map(({ id, name, description, condition, price, available }) => (
          <div key={id}>
            <Item
              id={id}
              name={name}
              description={description}
              condition={condition}
              price={price}
              image={image}
              itemCount={available}
              setItems={setItems}
            />
            <hr className="w-full my-4 bg-parts-gray-400 h-0.5" />
          </div>
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
