import InfoBanner from "../public/InfoBanner.svg";
import Image from "next/image";

export default function Info() {
  return (
    <div className="bg-rparts-white flex justify-center items-center">
      <Image src={InfoBanner} alt="INFO BANNER" responsive />
    </div>
  );
}
