import Image from "next/image";
import Plus from "../public/PlusSign.svg";

const SellPhoto = () => {
  return (
    <>
      <button className="border-rparts-subheadingGray border rounded-3xl aspect-square flex justify-center items-center flex-col w-3/12">
        <div className="w-3/12">
          <Image src={Plus} alt="Landing" layout="responsive" />
        </div>
      </button>
    </>
  );
};

export default SellPhoto;
