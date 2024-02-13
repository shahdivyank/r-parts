import { links } from "@/data/profile/Links";
import Link from "next/link";

const Navigation = ({ current }) => {
  return (
    <div className="flex font-outfit space-x-2 pt-5">
      {Object.entries(links).map(([value, name], index) => (
        <Link
          key={index}
          href={`/profile?index=${value}`}
          className={`${
            current === value
              ? "bg-parts-orange border-parts-orange text-white"
              : "bg-transparent border-gray-300 text-gray-400"
          }  px-4 py-3 mr-1 h-fit focus:outline-none rounded-lg border-2 hover:bg-parts-orange hover:text-white`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
