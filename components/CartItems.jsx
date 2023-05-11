import React, { useContext } from "react";
import CartItem from "./CartItem";
import PartsContext from "./PartsContext";

const CartItems = () => {
  const { cart } = useContext(PartsContext);
  return (
    <div className="flex flex-col justify-between p-12 border-[1px] border-rparts-borderGray rounded-3xl">
      {cart.map((item, index) => (
        <>
          <CartItem
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            price={item.price}
            image={item.images[0]}
          />
          {index !== cart.length - 1 ? (
            <span className="flex border-[0.5px] border-rparts-borderGray my-6" />
          ) : (
            ``
          )}
        </>
      ))}
    </div>
  );
};

export default CartItems;
