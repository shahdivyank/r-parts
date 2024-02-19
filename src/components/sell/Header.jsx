const Header = ({ state }) => {
  return (
    <div className="flex justify-between">
      <div className="flex-col">
        <p className="font-bebas text-3xl">LIST YOUR PART</p>

        <p className="font-outfit text-parts-gray-500 text-xs">
          Fill out the following prompts that accurately describe your part
        </p>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-parts-orange p-1.5 rounded-full" />
        <div className="bg-parts-orange p-1.5 rounded-full" />
        <div
          className={`${state == 1 && "border border-parts-gray-400"} ${
            state == 2 && "bg-parts-orange"
          } p-1.5 rounded-full`}
        />
      </div>
    </div>
  );
};

export default Header;
