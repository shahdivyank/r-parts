import Image from "next/image";
import UploadPhoto from "../public/UploadPhoto.svg";

const SellPhoto = () => {
  return (
    <>
      <div className="bg-rparts-wrapperGray rounded-3xl aspect-square flex justify-center items-center flex-col w-3/12">
        <div className="w-5/12">
          <Image src={UploadPhoto} alt="Landing" layout="responsive" />
        </div>
        <button className="border-solid border border-rparts-subheadingGray py-3 px-3 mt-4 text-rparts-subheadingGray rounded-3xl text-sm">
          UPLOAD FROM COMPUTER
        </button>
      </div>
    </>
  );
};

export default SellPhoto;
