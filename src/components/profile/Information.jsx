import Image from "next/image";
import { PiHouse } from "react-icons/pi";
import ProfileImage from "../../../public/information-placeholder.webp";

const Information = () => {
  return (
    <div className="flex flex-col w-1/4">
      <Image className="w-full rounded-3xl" src={ProfileImage} />
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-col">
          <div className="p-1" />
          <div className="font-bebas p-0 leading-none text-5xl">
            Mika Carodan
          </div>
          <div className="text-parts-gray-500 leading-none font-outfit">
            @msclal
          </div>
        </div>
        <div className="py-2" />
        <div className="flex font-outfit">
          <div className="flex">
            <div className="font-bold">12</div>{" "}
            <div className="font-light">&nbsp;listed・</div>
          </div>
          <div className="flex">
            <div className="font-bold">5</div>{" "}
            <div className="font-light">&nbsp;bought</div>
          </div>
        </div>
        <div className="flex font-outfit items-center">
          <PiHouse />
          <div className="p-1" />
          <div className="font-light">UC Riverside</div>
        </div>
        <div className="py-2" />
        <hr className="w-full" />
        <div className="py-2" />
        <div className="flex flex-col gap-2">
          <div className="font-medium font-outfit">Groups</div>
          <div className="flex gap-2">
            <div className="bg-parts-orange p-5 rounded" />
            <div className="bg-parts-orange p-5 rounded" />
            <div className="bg-parts-orange p-5 rounded" />
            <div className="bg-parts-orange p-5 rounded" />
            <div className="bg-parts-orange p-5 rounded" />
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
