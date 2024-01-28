import Button from "../Button";
import { cart, cartHeader, cartList } from "@/data/cart";
import { checkout, checkoutHeader, checkoutList } from "@/data/checkout";

const Total = ({ state, setState }) => {
  return (
    <div className="font-outfit w-[30%]">
      <div className="p-8 py-7 bg-parts-gray-100 rounded-3xl mb-6">
        <div className="border-b-2 border-r-parts-gray-500 justify-between flex font-bold text-xl pb-4 mb-3">
          <p>Total</p>
          <p>${state === 0 ? cart.total : checkout.total}</p>
        </div>
        {state === 0
          ? cartList.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm mb-1.5 font-medium"
              >
                <p>{cartHeader[item]}</p>
                <p>{cart[item]}</p>
              </div>
            ))
          : checkoutList.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm mb-1.5 font-medium"
              >
                <p>{checkoutHeader[item]}</p>
                <p>{checkout[item]}</p>
              </div>
            ))}
      </div>

      <Button
        text={state === 0 ? "PROCEED TO CHECKOUT" : "PLACE ORDER"}
        color="bg-orange"
        rounded="full"
        size="checkout"
        onClick={() => setState(state + 1)}
      />
    </div>
  );
};

export default Total;
