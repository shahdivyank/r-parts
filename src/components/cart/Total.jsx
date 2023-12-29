import Button from "../Button";
import { cart, cartHeader, cartList } from "@/data/cart";
import { checkout, checkoutHeader, checkoutList } from "@/data/checkout";
const itemFormat = "flex justify-between text-sm mb-1.5 font-medium";
const totalFormat =
  "border-b-2 border-r-parts-gray-500 justify-between flex font-bold text-xl pb-4 mb-3";

const Total = ({ type }) => {
  return (
    <div className="font-outfit w-[30%]">
      <div className="p-8 py-7 bg-parts-gray-100 rounded-3xl mb-6">
        <div className={totalFormat}>
          <p>Total</p>
          <p>${type === "cart" ? cart.total : checkout.total}</p>
        </div>
        {type === "cart"
          ? cartList.map((item, index) => (
              <div key={index} className={itemFormat}>
                <p>{cartHeader[item]}</p>
                <p>{cart[item]}</p>
              </div>
            ))
          : checkoutList.map((item, index) => (
              <div key={index} className={itemFormat}>
                <p>{checkoutHeader[item]}</p>
                <p>{checkout[item]}</p>
              </div>
            ))}
      </div>

      <Button
        text={type === "cart" ? "PROCEED TO CHECKOUT" : "PLACE ORDER"}
        color="bg-orange"
        rounded="full"
        size="xl"
      />

      {type === "cart" && (
        <p className="text-xs my-3 text-parts-gray-500 font-light">
          {cart.delivery === "Pick Up"
            ? "*Schedule pick up times at checkout"
            : "*Schedule shipping times at checkout"}
        </p>
      )}
    </div>
  );
};

export default Total;
