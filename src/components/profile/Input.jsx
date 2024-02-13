import { FaSearch } from "react-icons/fa";

const icons = {
  search: <FaSearch className="text-parts-gray-500 mx-2" />,
};

const Input = ({ value, onChange, icon }) => {
  return (
    <div className="flex items-center bg-parts-gray-200 w-fit p-2 rounded">
      {icons[icon]}{" "}
      <input
        className="placeholder:text-parts-gray-500 bg-parts-gray-200 focus:outline-none"
        placeholder="SEARCH"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
