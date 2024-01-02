const Banner = () => {
  const years = 100;
  const parts = "3M";
  const professors = "5M";

  return (
    <div className="w-full flex justify-evenly px-[10%] py-7 bg-parts-navy text-white font-outfit">
      <div className="flex items-center">
        <p className="font-bold text-5xl">{years}+</p>
        <div className="ml-2 text-sm font-light">
          <p>YEARS</p>
          <p>OF SERVICE</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-5xl">{parts}+</p>
        <div className="ml-2 text-sm font-light">
          <p>PARTS</p>
          <p>REFURBISHED</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold text-5xl">{professors}+</p>
        <div className="ml-2 text-sm font-light">
          <p>ACTIVE</p>
          <p>PROFESSORS</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
