import { IoLockClosedOutline } from "react-icons/io5";
import Input from "../Input";
import { DELIVERY_FIELDS } from "@/data/cart";
import Radio from "../Radio";
import { DELIVERY_METHOD } from "@/data/cart";

const Delivery = ({ state, delivery, setDelivery }) => {
  return (
    state === 1 && (
      <div className="w-full">
        <div className="justify-between flex mb-3">
          <div className="font-semibold text-xl">Delivery Information</div>
          <div className="text-sm flex items-center gap-1">
            <IoLockClosedOutline />
            SECURE CHECKOUT
          </div>
        </div>
        <div className="border border-parts-gray-400 rounded-3xl w-full p-10 grid grid-cols-2 gap-4">
          {DELIVERY_FIELDS.map(({ text, field, span }, index) => (
            <div
              key={index}
              className={`w-full flex flex-col mb-6 md:mb-0 ${span}`}
            >
              <Input
                onChange={(e) =>
                  setDelivery({ ...delivery, [field]: e.target.value })
                }
                object={delivery}
                setObject={setDelivery}
                field={field}
                text={text}
                value={delivery[field]}
              />
            </div>
          ))}
          <div className="col-span-2 border-gray-300 border-t mt-6 pt-6">
            <Radio
              object={delivery}
              setObject={setDelivery}
              field="deliveryMethod"
              text="Delivery Method"
              options={DELIVERY_METHOD}
              onClick={(option) =>
                setDelivery({ ...delivery, deliveryMethod: option })
              }
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Delivery;
