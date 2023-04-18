import React from "react";
import creditcard from "../public/creditcard.svg";
import Image from "next/image";

const Payment = () => {
  return (
    <div className="rounded-3xl h-fit mx-6 my-4 p-4 bg-white border-2 border-rparts-borderGray">
      <div className="text-3xl font-bold font-outfit  p-3">Payment Method</div>

      <button className=" flex  items-center">
        <div className="flex m-4 px-1 py-2">
          <Image
            src={creditcard}
            alt="credit card image"
            className="mx-4 object-cover"
            width={800}
          />
        </div>
        <div className="bg-rparts-wrappergGray rounded-r-full px-3 py-4 text-left">
          <text className="font-outfit font-medium">
            At this moment, we are currently only taking in-person payments.
            After order placement, you will receive a confirmation email. Show
            this to our representative and pay with your preferred payment
            method.
          </text>
          <text className="text-rparts-orange font-outfit font-medium ">
            We are not accepting cards.
          </text>
        </div>
      </button>

      <div className="font-outfit text-lg px-3 font-bold">
        Select your preferred payment method:
      </div>
      <div className="flex justify-start px-3">
        <button className="bg-rparts-orange rounded-full px-4 py-2 my-4 mr-3 text-rparts-white font-outfit">
          Cash
        </button>
        <button className="rounded-full px-4 py-2 my-4 text-rparts-black font-outfit border-2 border-rparts-borderGray">
          E-Payment (Venmo, Zelle, CashApp, ApplePay)
        </button>
      </div>
    </div>
  );
};

export default Payment;
