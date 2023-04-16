import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";
export default function Cart() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-between">
        <CartItems />
        <CartTotal />
      </div>
    </section>
  );
}
