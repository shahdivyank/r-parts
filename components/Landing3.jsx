import Landing3SVG from "../public/Landing3SVG.svg";
import Image from "next/image";

const Landing3 = () => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="absolute font-bebasNeue text-8xl text-rparts-subHeadingGray text-right flex justify-center items-end">
            decreasing student fees and assisting those who are aiming to learn,
            grow, and push limits
          </div>
          <Image src={Landing3SVG} alt="Landing" layout="responsive" />
        </div>
      </div>
    </>
  );
};

export default Landing3;
