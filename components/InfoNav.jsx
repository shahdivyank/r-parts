import Image from "next/image";
import gearNav from "../public/gear_info_nav.png";
import arrow from "../public/arrow_info_nav.png";
import faqNav from "../public/faq_info_nav.png";

const InfoNav = () => {
  return (
    <section id="info-nav">
      <div className="flex flex-col bg-indigo-500 left-12 top-72 mt-3">
        <a
          href="#introduction"
          className="font-outfit mb-2 px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-r-full mr-24 hover:bg-rparts-hoverOrange hover:text-white w-52 h-12"
        >
          <Image src={gearNav} alt="acm logo" width={24} height={24} /> What is
          R’Parts
        </a>

        <a
          href="#how-it-works"
          className="font-outfit mb-2 px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-r-full mr-24 hover:bg-rparts-orange hover:text-white w-52 h-12"
        >
          <Image src={arrow} alt="acm logo" width={24} height={24} /> How It
          Works
        </a>

        <div className="flex bg-white ">
          <a
            href="#faqs"
            className="font-outfit px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-r-full mr-24 hover:bg-rparts-orange hover:text-white w-52 h-12"
          >
            <Image src={faqNav} alt="acm logo" width={24} height={24} /> FAQ
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoNav;
