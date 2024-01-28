import Items from "./Items";
import Total from "./Total";

const Cart = () => {
  return (
    <div className="flex">
      <Items />
      <Total />
    </div>
  );
};

export default Cart;
