import React, { useContext } from "react";
import CartItem from "./CartItem";
import PartsContext from "./PartsContext";

const CartItems = () => {
  const { cart } = useContext(PartsContext);
  // console.log(cart, cart?.length);
  return (
    cart && (
      <div className="flex flex-col justify-between p-12 border-[1px] border-rparts-borderGray rounded-3xl">
        {cart.length === 0 ? (
          <div className="h-[135px]" />
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index}>
                <CartItem
                  id={item?.data?.id}
                  title={item?.data?.title}
                  description={item?.data?.description}
                  quantity={item?.data?.quantity}
                  price={item?.data?.price}
                  condition={item?.data?.condition}
                  image={item?.data?.images[0]}
                />
                {cart && index !== cart.length - 1 ? (
                  <span className="flex border-[0.5px] border-rparts-borderGray my-6" />
                ) : (
                  ``
                )}
              </div>
            ))}
          </>
        )}
      </div>
    )
  );
};

export default CartItems;
