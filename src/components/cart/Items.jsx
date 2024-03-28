import Item from "./Item";
import image from "../../../public/svg/cartItem.svg";
import { PiHandbagSimple } from "react-icons/pi";

const Items = ({ state, items, setItems }) => {
  return (
    <>
      {state == 1 && (
        <div className="font-semibold text-xl my-3">Shopping Cart</div>
      )}
      <div className="border border-parts-gray-400 rounded-3xl flex justify-center items-center w-full p-10 flex-col">
        {items.map(({ id, name, description, condition, price, available }) => (
          <div key={id}>
            <Item
              id={id}
              name={name}
              description={description}
              condition={condition}
              price={price}
              image={image}
              itemCount={available}
              setItems={setItems}
            />
            <hr className="w-full my-4 bg-parts-gray-400 h-0.5" />
          </div>
        ))}

        {items.length === 0 && (
          <div className="flex justify-center items-center flex-col">
            <PiHandbagSimple className="text-9xl text-parts-gray-400 " />
            <p className="font-outfit font-light text-parts-gray-500 text-sm">
              Shopping Bag is Empty
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Items;
