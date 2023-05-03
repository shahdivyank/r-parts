const Checkbox = ({ curr }) => {
  return (
    <>
      <div className="flex my-1">
        <input
          type="checkbox"
          id="class"
          name="class"
          className="focus:bg-rparts-orange"
        />
        <label for="class" className="ml-3 text-rparts-subheadingGray">
          {curr.label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
