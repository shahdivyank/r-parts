import Image from "next/image";
import profile from "../../../public/information-placeholder.webp";
import Stars from "./Stars";

const Review = () => {
  return (
    <div className="flex bg-white rounded-lg p-8 font-outfit">
      <div className="w-1/4 flex flex-col items-center justify-center">
        <Image src={profile} className="rounded-full w-16" />
        <p className="font-semibold">Bobby Lerias</p>
        <p className="text-xs text-parts-gray-500 font-light">CUSTOMER</p>
        <Stars rating={4} />
      </div>
      <div className="w-3/4 p-4 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default Review;
