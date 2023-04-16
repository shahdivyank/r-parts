import React from "react";
import CartItem from "./CartItem";

const cartEntries = [
  // {
  //   title: "ESP8266 WiFi Bee",
  //   condition: "New",
  //   quantity: "1",
  //   price: "$57.09",
  // },
  // {
  //   title: "ESP8266 WiFi Bee",
  //   condition: "New",
  //   // quantity: "1",
  //   price: "$57.09",
  // },
  {
    title: "ESP8266 WiFi Bee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    quantity: "1",
    condition: "New",
    date: "11/02/2021",
    price: "$57.09",
  },
  {
    title: "ESP8266 WiFi Bee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    quantity: "1",
    condition: "New",
    date: "11/02/2021",
    price: "$57.09",
  },
  {
    title: "ESP8266 WiFi Bee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis mi ut velit porttitor placerat.",
    quantity: "1",
    condition: "New",
    date: "11/02/2021",
    price: "$57.09",
  },
];

const CartItems = () => {
  return (
    <div className="w-[40%] h-full flex flex-col justify-between p-12 border-[1px] border-rparts-borderGray rounded-3xl">
      {/* <p>Hello</p>; */}
      {cartEntries.map((entry, index) => (
        <>
          <CartItem key={index} entry={entry} />
          {index !== cartEntries.length - 1 ? (
            <span className="flex border-[0.5px] border-rparts-borderGray my-6" />
          ) : (
            ``
          )}
        </>
      ))}
      {/* <CartItem />
      <span className="flex border-[0.5px] border-rparts-borderGray my-7" />
      <CartItem /> */}
    </div>
  );
};

export default CartItems;
