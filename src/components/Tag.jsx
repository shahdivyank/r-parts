import { TAGS, COLORS } from "@/data/Tag";

const Tag = ({ text }) => {
  return (
    <div
      className={`${COLORS[TAGS[upeer]].text} ${
        COLORS[TAGS[upeer]].bg
      } px-2 text-sm rounded`}
    >
      {text.toUpperCase()}
    </div>
  );
};

export default Tag;
