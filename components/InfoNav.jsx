import Link from "next/link";
import { PiCirclesFourBold } from "react-icons/pi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { PiGearSixBold } from "react-icons/pi";

const links = [
  {
    link: "#introduction",
    image: <PiGearSixBold size={20} />,
    text: "What is R’Parts",
  },
  {
    link: "#how-it-works",
    image: <PiPaperPlaneTiltBold size={20} />,
    text: "How it Works",
  },
  {
    link: "#faqs",
    image: <PiCirclesFourBold size={20} />,
    text: "FAQs",
  },
];

const InfoNav = () => {
  return (
    <div className="mt-16 mx-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="font-outfit mb-2 px-3 py-3 border-[1px] border-rparts-borderGray text-rparts-subheadingGray rounded-r-full hover:!bg-rparts-hoverOrange hover:text-white flex"
        >
          <div className="flex items-center pr-4">{link.image} </div>{" "}
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default InfoNav;
