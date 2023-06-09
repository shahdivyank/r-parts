import React, { useContext, useState } from "react";
import creditcard from "../public/creditcard.svg";
import Image from "next/image";
import PartsContext from "./PartsContext";

const Payment = () => {
  const { order, setOrder } = useContext(PartsContext);

  // enum values are: "cash" or "e-payment"
  const [payment, setPayment] = useState("cash");

  // remove after toggle behavior has been done
  console.log(payment, setPayment);

  const handlePayment = (paymentMethod) => {
    setOrder({ ...order, payment: paymentMethod });
  };

  return (
    <div className="rounded-3xl h-fit  my-4 p-4 bg-white border-[1px] border-rparts-borderGray">
      <div className="text-3xl font-semibold font-outfit  p-3">
        Payment Method
      </div>

      <button className=" flex  items-center">
        <div className="flex m-4 px-1 py-2">
          <Image
            src={creditcard}
            alt="credit card image"
            className="mx-4 object-cover"
            width={800}
          />
        </div>
        <div className="bg-rparts-wrapperGray rounded-r-full px-3 py-4 text-left">
          <span className="font-outfit mb-0">
            At this moment, we are currently only taking in-person payments.
            After order placement, you will receive a confirmation email. Show
            this to our representative and pay with your preferred payment
            method.
          </span>
          <span className="text-rparts-orange font-outfit mb-0">
            We are not accepting cards.
          </span>
        </div>
      </button>

      <div className="font-outfit text-lg px-3 font-medium">
        Select your preferred payment method:
      </div>
      <div className="flex justify-start px-3">
        <button
          onClick={() => handlePayment("cash")}
          className="bg-rparts-orange rounded-full px-4 py-2 my-4 mr-3 text-rparts-white font-outfit text-white"
        >
          Cash
        </button>
        <button className="rounded-full px-4 py-2 my-4 text-rparts-black font-outfit border-[1px] border-rparts-borderGray">
          E-Payment (Venmo, Zelle, CashApp, ApplePay)
        </button>
      </div>
    </div>
  );
};

export default Payment;
