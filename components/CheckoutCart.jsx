import React, { useContext } from "react";
import CheckoutCartItem from "./CheckoutCartItem";
import PartsContext from "./PartsContext";

const CartItems = () => {
  const { cart } = useContext(PartsContext);
  return (
    <div className="  flex flex-col justify-between rounded-3xl h-fit  my-4 p-4 bg-white border-[1px] border-rparts-borderGray">
      <div className="text-3xl font-outfit font-semibold p-3">
        {" "}
        Shopping Cart{" "}
      </div>
      {cart.map((item, index) => (
        <div key={index}>
          <CheckoutCartItem
            image={item?.data?.images[0]}
            title={item?.data?.title}
            condition={item?.data?.condition}
            quantity={item?.data?.quantity}
            price={item?.data?.price}
          />
          {cart && index !== cart.length - 1 ? (
            <span className="flex border-[0.5px] border-rparts-borderGray my-7" />
          ) : (
            // ``
            <span className="flex border-[0px] border-rparts-borderGray my-7" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CartItems;
