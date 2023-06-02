const Checkbox = ({ label, setState, state }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      setState([...state, label]);
    } else {
      setState(state.filter((a) => a !== label));
    }
  };

  return (
    <div className="flex items-center my-1">
      <input
        type="checkbox"
        id="checkbox1"
        name="checkbox1"
        onChange={onChange}
        className="peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-orange-500 hover:ring hover:ring-gray-300 focus:outline-none"
      />
      <label
        htmlFor="checkbox1"
        className="w-full cursor-pointer font-sm font-outfit ml-3 text-rparts-subheadingGray peer-checked:text-rparts-orange"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
