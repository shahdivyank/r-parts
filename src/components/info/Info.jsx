import FAQ from "../about/Faq";
import Questions from "@/data/Questions.js";

const Info = () => {
  return (
    <div className="bg-blue-500 w-1/2 rounded-xl border-2 border-gray-400 px-5 py-4">
      <p className="text-lg font-semibold ">FAQs</p>
      <div className="border-b-2 border-gray-400 my-2" />
      {Questions.map(({ index, question, answer }) => (
        <FAQ key={index} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default Info;
