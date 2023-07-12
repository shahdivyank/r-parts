import React, { useContext } from "react";
import PartsContext from "./PartsContext";
import axios from "axios";

const CheckoutTotal = () => {
  const { total, order } = useContext(PartsContext);

  const handleSubmit = () => {
    console.log("ORDER", order);
    axios.post("/api/placeOrder", order).then((response) => {
      console.log("order placed successfully");
    });
  };

  return (
    <div>
      <div className="rounded-3xl h-fit my-4 px-5 py-4 bg-rparts-wrapperGray flex flex-col ">
        <div className="font-semibold flex justify-between font-outfit text-xl ">
          <div>Total</div>
          <div>${total}.00</div>
        </div>
        <hr className="h-px my-6 border-[0.5px] dark:bg-gray-700" />

        <div className="font-outfit flex justify-between">
          <div>Items</div>
          <div>3</div>
        </div>

        <div className="font-outfit flex justify-between">
          <div>Payment Method</div>
          <div>Cash</div>
        </div>

        <div className="font-outfit flex justify-between">
          <div> Pick Up</div>
          <div className="flex flex-col items-end">
            <div> January 1, 2023 </div>
            <div> 2:30 pm </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-rparts-orange rounded-full w-full py-2 px-4 text-white font-outfit"
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default CheckoutTotal;
