import Landing4SVG from "../public/Landing4.svg";
import Image from "next/image";

const Landing4 = () => {
  return (
    <>
      <div>
        <div className="relative flex justify-between">
          <div>Sustainability</div>
          <div>Community</div>
        </div>
        <div className="absolute w-1/3 flex justify-center bg-red-500">
          <Image src={Landing4SVG} alt="Landing" layout="responsive" />
        </div>
      </div>
    </>
  );
};

export default Landing4;
