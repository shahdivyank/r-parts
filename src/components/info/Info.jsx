import FAQ from "./Faq";
import Questions from "@/data/Questions.js";
import WhatIs from "@/components/info/WhatIs.jsx";
import HowItWorks from "@/components/info/HowItWorks.jsx";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/2 rounded-xl border border-gray-300 px-5 py-5 m-10">
        <p className="text-lg font-semibold">What Is It</p>
        <div className="border-b border-gray-300 my-2" />
        <WhatIs />
      </div>

      <div className="w-1/2 rounded-xl border border-gray-300 px-5 py-5 m-10">
        <p className="text-lg font-semibold">How It Works</p>
        <div className="border-b border-gray-300 my-2" />
        <HowItWorks />
      </div>

      <div className="w-1/2 rounded-xl border border-gray-300 px-5 py-5 m-10">
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
