import { TAGMAP, COLORS } from "@/data/Tag";
const Tag = ({ text }) => {
  const upeer = text.toUpperCase();
  return (
    <div
      className={`${COLORS[TAGMAP[upeer]].text} ${
        COLORS[TAGMAP[upeer]].bg
      } px-2 text-sm rounded`}
    >
      {upeer}
    </div>
  );
};

export default Tag;
