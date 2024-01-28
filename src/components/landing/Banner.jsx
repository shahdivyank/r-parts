const Banner = () => {
  const years = 100;
  const parts = "3M";
  const professors = "5M";

  return (
    <div className="w-full flex justify-evenly py-7 bg-parts-navy text-white font-outfit my-10">
      <div className="flex items-center">
        <p className="font-bold text-5xl">{years}+</p>
        <div className="ml-2 text-sm font-light">
          YEARS <br /> OF SERVICE
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-5xl">{parts}+</p>
        <div className="ml-2 text-sm font-light">
          PARTS <br /> REFURBISHED
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-5xl">{professors}+</p>
        <div className="ml-2 text-sm font-light">
          ACTIVE <br /> PROFESSORS
        </div>
      </div>
    </div>
  );
};

export default Banner;
