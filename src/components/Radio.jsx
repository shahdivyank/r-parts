import { FaCircle, FaRegCircle } from "react-icons/fa";

const Radio = ({ object, setObject, field, text, options, onClick }) => {
  return (
    <div className="w-full">
      <div className="font-medium text-sm mb-1">{text}</div>
      <div className="w-full grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="border border-parts-gray-400 rounded w-full bg-transparent cursor-pointer flex justify-between items-start p-4"
            onClick={() => onClick(option.text)}
          >
            <div>
              <div className="text-sm font-medium">{option.text}</div>
              <div className="text-xs font-light">{option.description}</div>
              <div className="text-sm font-medium mt-5">{option.price}</div>
            </div>
            {object[field] === option.text ? (
              <FaCircle key={index} className="text-parts-orange" />
            ) : (
              <FaRegCircle key={index} className="text-parts-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
