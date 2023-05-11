const Checkbox = ({ curr }) => {
  return (
    <div className="flex items-center my-1">
      <input
        type="checkbox"
        id="checkbox1"
        name="checkbox1"
        className="peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-orange-500 hover:ring hover:ring-gray-300 focus:outline-none"
      />
      <label
        for="checkbox1"
        className="w-full cursor-pointer font-sm font-outfit ml-3 text-rparts-subheadingGray peer-checked:text-rparts-orange"
      >
        {curr.label}
      </label>
    </div>
  );
};

export default Checkbox;
