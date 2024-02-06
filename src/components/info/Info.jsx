import FAQ from "./Faq";
import Header from "../Header";
import Questions from "@/data/Questions.js";

const Info = () => {
  return (
    <div className="w-11/12 flex flex-col items-center">
      <Header title="Info" />
      <div className="w-1/2 rounded-xl border border-gray-300 px-5 py-5 m-10 items">
        <p className="text-lg font-semibold">FAQs</p>
        <div className="border-b border-gray-300 my-2" />
        {Questions.map(({ index, question, answer }) => (
          <FAQ key={index} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Info;
