import Image from "next/image";
import profile from "../../../public/information-placeholder.webp";
import Stars from "./Stars";

const Review = () => {
  return (
    <div className="flex bg-white mx-3 rounded-lg p-8 font-outfit">
      <div className="w-1/4 flex flex-col items-center justify-center">
        <Image src={profile} className="rounded-full w-16" />
        <p className="font-semibold">Bobby Lerias</p>
        <p className="text-xs text-parts-gray-500 font-light">CUSTOMER</p>
        <Stars rating={1} />
      </div>
      <div className="w-3/4 p-4 font-light">
        I was very disappointed with the vendor and the timing of the delivery.
        The vendor said within 1 week but did not deliver for another month. I
        had a purpose to use the board and it did not serve the purpose.
      </div>
    </div>
  );
};

export default Review;
