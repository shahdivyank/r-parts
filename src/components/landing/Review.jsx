import Image from "next/image";
import profile from "../../../public/information-placeholder.webp";
import Stars from "./Stars";

const Review = () => {
  return (
    <div className="flex bg-white mx-3 rounded-lg p-7 font-outfit">
      <div className="w-1/4 flex flex-col items-center justify-center ">
        <Image src={profile} className="rounded-full w-16" />
        <p className="font-medium text-sm">Bobby Lerias</p>
        <p className="text-xs text-parts-gray-500 font-light mb-3">CUSTOMER</p>
        <Stars rating={1} />
      </div>
      <div className="w-3/4 font-light text-sm pl-4">
        I was very disappointed with the vendor and the timing of the delivery.
        The vendor said within 1 week but did not deliver for another month. I
        had a purpose to use the board and it did not serve the purpose.
      </div>
    </div>
  );
};

export default Review;
