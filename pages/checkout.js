import Payment from "../components/Payment";
import CheckoutTotal from "../components/CheckoutTotal";

export default function Checkout() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-2/5 mx-3">
          <Payment />
        </div>

        <div className="w-1/4 mx-3 ">
          <CheckoutTotal />
        </div>
      </div>
    </>
  );
}
