const InfoNav = () => {
  return (
    <section id="info-nav">
      <div className="absolute flex flex-col bg-indigo-500 left-12 top-72 mt-3">
        <a
          href="#what-is"
          className="font-outfit mb-2 px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-r-full mr-24 hover:bg-rparts-hoverOrange hover:text-white w-52 h-12"
        >
          {" "}
          What is R’Parts
        </a>

        <a
          href="#how-it-works"
          className="font-outfit mb-2 px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-r-full mr-24 hover:bg-rparts-orange hover:text-white w-52 h-12"
        >
          {" "}
          How It Works
        </a>

        <a
          href="#faqs"
          className="font-outfit px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-r-full mr-24 hover:bg-rparts-orange hover:text-white w-52 h-12"
        >
          {" "}
          FAQ
        </a>
      </div>
    </section>
  );
};

export default InfoNav;
