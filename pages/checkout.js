import Payment from "../components/Payment";
import CheckoutTotal from "../components/CheckoutTotal";

export default function Checkout() {
  return (
    <>
      <div className="flex ">
        <Payment />
        <CheckoutTotal />
      </div>
    </>
  );
}
