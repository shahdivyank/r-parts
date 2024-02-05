import { HEADER } from "@/data/cart";

import { FaCircle, FaRegCircle } from "react-icons/fa";
const Header = ({ state }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <div className="font-bebas text-3xl">{HEADER[state]?.header}</div>
        <div className="font-outfit text-sm font-light text-parts-gray-500">
          {HEADER[state]?.subTitle}
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: state + 1 }).map((index) => (
          <FaCircle key={index} className="text-parts-orange" />
        ))}
        {Array.from({ length: 2 - state }).map((index) => (
          <FaRegCircle key={index} className="text-parts-gray-400" />
        ))}
      </div>
    </div>
  );
};

export default Header;
