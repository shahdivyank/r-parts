import Link from "next/link";
import { PiCirclesFourBold } from "react-icons/pi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { PiGearSixBold } from "react-icons/pi";

const links = [
  {
    link: "#introduction",
    image: <PiGearSixBold />,
    text: "What is R’Parts",
  },
  {
    link: "#how-it-works",
    image: <PiPaperPlaneTiltBold />,
    text: "How it Works",
  },
  {
    link: "#faqs",
    image: <PiCirclesFourBold />,
    text: "FAQs",
  },
];

const InfoNav = () => {
  return (
    <div className="mt-16 ml-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="font-outfit mb-2 px-3 py-2 border-[1px] border-rparts-borderGray text-rparts-subheadingGray rounded-r-full mr-36 hover:!bg-rparts-hoverOrange hover:text-white flex"
        >
          {link.image} {link.text}
        </Link>
      ))}
    </div>
  );
};

export default InfoNav;
