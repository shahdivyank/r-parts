import Landing3SVG from "../public/Landing3SVG.svg";
import Image from "next/image";

const Landing3 = () => {
  return (
    <>
      <div className="-mt-64">
        <div className="relative flex items-center">
          <p className="absolute mt-24 font-bebasNeue right-[14%] w-2/3 text-8xl text-right text-rparts-subHeadingGray">
            decreasing student fees and assisting those who are aiming to
            <span className="text-rparts-orange"> learn</span>,
            <span className="text-rparts-orange"> grow</span>, and
            <span className="text-rparts-orange"> push limits</span>
          </p>
          <Image src={Landing3SVG} alt="Landing" layout="responsive" />
        </div>
      </div>
    </>
  );
};

export default Landing3;
