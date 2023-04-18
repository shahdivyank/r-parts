import React from "react";

const CheckoutTotal = () => {
  return (
    <div>
      <div className="rounded-3xl w-full h-fit mx-6 my-4 p-4 bg-rparts-wrappergGray border-2 border-rparts-borderGray flex flex-col ">
        <div className="font-bold flex justify-between font-outfit text-2xl ">
          <div> Total </div>
          <div> $179.97</div>
        </div>
        <hr class="h-px my-6 border-2 dark:bg-gray-700" />

        <div className="font-outfit flex justify-between">
          <div> Items</div>
          <div> 3</div>
        </div>

        <div className="font-outfit flex justify-between">
          <div> Payment Method</div>
          <div> Cash </div>
        </div>

        <div className="font-outfit flex justify-between">
          <div> Pick Up</div>
          <div className="flex flex-col items-end">
            <div> January 1, 2023 </div>
            <div> 2:30 pm </div>
          </div>
        </div>
      </div>
      <button className="bg-rparts-orange rounded-full py-2 px-4 w-full mx-6 text-white font-outfit">
        PLACE ORDER
      </button>
    </div>
  );
};

export default CheckoutTotal;
