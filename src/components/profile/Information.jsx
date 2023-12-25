import Image from "next/image";
import { PiHouse } from "react-icons/pi";
import ProfileImage from "../../../public/information-placeholder.webp";

const Information = () => {
  return (
    <div className="flex flex-col w-full">
      <Image className="w-full rounded-3xl" src={ProfileImage} />
      <div className="" />
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <div className="p-1" />
          <div className="font-bebas p-0 leading-none text-3xl w-3/4">
            Mika Carodan
          </div>
          <div className="text-parts-gray-400 leading-none font-outfit">
            @msclal
          </div>
        </div>
        <div className="py-2" />
        <div className="flex font-outfit">
          <div className="flex">
            <div className="font-bold">12</div> <div>&nbsp;listed・</div>
          </div>
          <div className="flex">
            <div className="font-bold">5</div> <div>&nbsp;bought</div>
          </div>
        </div>
        <div className="flex font-outfit items-center">
          <PiHouse />
          <div className="p-1" />
          <div>UC Riverside</div>
        </div>
        <div className="py-2" />
        <hr className="w-full" />
        <div className="py-2" />
        <div className="flex flex-col gap-2">
          <div className="font-medium font-outfit">Groups</div>
          <div className="flex gap-2">
            <div className="bg-parts-orange p-3 rounded" />
            <div className="bg-parts-orange p-3 rounded" />
            <div className="bg-parts-orange p-3 rounded" />
            <div className="bg-parts-orange p-3 rounded" />
            <div className="bg-parts-orange p-3 rounded" />
          </div>
          <div className="py-1" />
          <div className="w-full py-2 font-outfit font-light text-xs border-solid border border-parts-gray-500 rounded-lg text-center text-parts-gray-500">
            EDIT PROFILE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
