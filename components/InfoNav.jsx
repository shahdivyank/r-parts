import Link from "next/link";
import { BsGearFill } from "react-icons/bs";

const links = [
  {
    link: "#what-is",
    image: <BsGearFill />,
    text: "R’Parts",
  },
  {
    link: "#how-it-works",
    image: <BsGearFill />,
    text: "How it Works",
  },
  {
    link: "#faqs",
    image: <BsGearFill />,
    text: "FAQ",
  },
];

const InfoNav = () => {
  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="font-outfit mb-2 px-3 py-2 border-[1px] border-rparts-borderGray text-rparts-subheadingGray rounded-r-full mr-24 hover:!bg-rparts-hoverOrange hover:text-white flex"
        >
          {link.image} {link.text}
        </Link>
      ))}
    </div>
  );
};

export default InfoNav;
