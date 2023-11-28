import Image from "next/image";
import bgSvg from "../../../public/svg/description.svg";

const Description = () => {
  return (
    <div className="w-full relative">
      <Image src={bgSvg} className="w-full object-cover" />
      <div className="font-bebas absolute text-xl sm:text-3xl md:text-5xl xl:text-7xl top-1/2 right-[10%] w-7/12 text-right text-parts-gray-500 -translate-y-1/2">
        decreasing student fees and assisting those who are aiming to
        <span className="text-parts-orange">&nbsp;learn</span>,
        <span className="text-parts-orange">&nbsp;grow</span>, and
        <span className="text-parts-orange">&nbsp;push limits</span>
      </div>
    </div>
  );
};

export default Description;
