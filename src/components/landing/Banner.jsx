const Banner = () => {
  const years = 5;
  const parts = 10;
  const professors = 120;

  return (
    <div className="w-full flex justify-center space-x-[10%] py-12 bg-parts-navy text-white font-outfit my-10">
      <div className="flex items-center">
        <p className="font-bold text-6xl">{years}+</p>
        <div className="ml-2 text-sm font-light">
          SATISFIED <br /> CUSTOMERS
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-6xl">{parts}+</p>
        <div className="ml-2 text-sm font-light">
          PARTS <br /> REFURBISHED
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-6xl">${professors}+</p>
        <div className="ml-2 text-sm font-light">
          TOTAL CUSTOMER <br /> DOLLARS SAVED
        </div>
      </div>
    </div>
  );
};

export default Banner;
