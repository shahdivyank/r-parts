import Marquee from "./Marquee";

const Reviews = () => {
  return (
    <div className=" my-[8%]">
      <Marquee />
      <Marquee reverse={true} />
    </div>
  );
};

export default Reviews;
