import FAQ from "../about/Faq";
import Questions from "@/data/Questions.js";

const Info = () => {
  return (
    <div className="w-1/2 rounded-xl border border-gray-300 px-5 py-5">
      <p className="text-lg font-semibold">FAQs</p>
      <div className="border-b border-gray-300 my-2" />
      {Questions.map(({ index, question, answer }) => (
        <FAQ key={index} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Info;
