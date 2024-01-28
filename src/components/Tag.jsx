import { TAGS, COLORS } from "@/data/Tag";

const Tag = ({ text }) => {
  const upperCase = text.toUpperCase();

  return (
    <div
      className={`${COLORS[TAGS[upperCase]].text} ${
        COLORS[TAGS[upperCase]].bg
      } px-2 text-sm rounded`}
    >
      {upperCase}
    </div>
  );
};

export default Tag;
