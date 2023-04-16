import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";

export default function Cart() {
  return (
    <section className="h-full w-screen font-outfit p-10 pb-20">
      <div className="flex justify-evenly">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="flex gap-x-4 font-thin text-rparts-subheadingGray text-xs mb-8">
            <button>MARKET</button>
            <p>/</p>
            <button>SHOPPING CART</button>
          </div>
          <div className="font-bebasNeue text-3xl">MY SHOPPING BAG</div>
          <div className="text-sm font-thin text-rparts-subheadingGray mb-4">
            View current items in cart and finalize before checkout
          </div>
          <CartItems />
        </div>
        <div className="w-1/4 mt-32">
          <CartTotal />
        </div>
      </div>
    </section>
  );
}
