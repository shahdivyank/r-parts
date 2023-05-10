import Payment from "../components/Payment";
import CheckoutTotal from "../components/CheckoutTotal";
import Schedule from "../components/Schedule";
import CheckoutCart from "../components/CheckoutCart";

export default function Checkout() {
  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="w-7/12 mx-3">
          <div className="font-bebasNeue text-4xl font-bold ">CHECKOUT </div>
          <div className="font-outfit text-rparts-subHeadingGray">
            Complete your purchase by providing the following information
          </div>
          <div className="flex w-full justify-center ">
            <div className="flex flex-col">
              <Payment />
              <Schedule />

              <CheckoutCart />
            </div>
            <div className="w-11/12 mx-10 ">
              <CheckoutTotal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
