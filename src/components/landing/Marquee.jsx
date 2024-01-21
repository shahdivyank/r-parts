import Review from "./Review";

const Marquee = ({ reverse }) => {
  return (
    <div className="flex w-screen overflow-x-hidden justify-evenly relative mt-8">
      <div
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }  flex justify-evenly w-full`}
      >
        <Review />
        <Review />
        <Review />
      </div>

      <div
        className={`${
          reverse
            ? "animate-marquee-continuation-reverse"
            : "animate-marquee-continuation"
        } flex justify-between w-full absolute h-full`}
      >
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Marquee;
