const Input = ({ object, field, text, placeholder, onChange, value }) => {
  return (
    <div className="w-full">
      <div className="font-medium text-sm mb-1">{text}</div>
      <input
        className="border border-parts-gray-400 rounded w-full bg-transparent px-2 py-1"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
