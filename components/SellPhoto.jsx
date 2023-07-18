// import Image from "next/image";
// import UploadPhoto from "../public/UploadPhoto.svg";

const SellPhoto = ({ image }) => {
  return (
    <>
      <div className="bg-rparts-wrapperGray rounded-3xl aspect-square flex justify-center items-center flex-col flex-shrink-0  w-1/5 m-[1%]">
        <div className="">
          {/* <Image src={UploadPhoto} alt="Landing" layout="responsive" /> */}
          <img src={image} />
        </div>
        {/* <button className="border border-rparts-subheadingGray py-2 px-3 mt-4 text-rparts-subheadingGray rounded-3xl text-xs">
          UPLOAD FROM COMPUTER
        </button> */}
      </div>
    </>
  );
};

export default SellPhoto;
