import Hello from "../components/Hello";
// import CartTotal from "../components/CartTotal";
import CartItems from "../components/CartItems";

export default function Home() {
  return (
    <>
      <Hello />
      {/* <CartTotal /> */}
      <CartItems />
    </>
  );
}
