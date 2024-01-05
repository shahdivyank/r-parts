import Home from "./Home";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Values from "./Values";
import Works from "./Works";
import FAQ from "../about/Faq";
import Questions from "@/data/Questions.js";
import React from "react";

const Landing = () => {
  return (
    <>
      <Home />
      <Banner />
      <Works />
      <Reviews />
      <Values />
      <div className="bg-blue-500 w-1/2 rounded-xl">
        FAQ well
        <hr className="gray" />
        {Questions.map(({ index, question, answer }) => (
          <FAQ key={index} question={question} answer={answer} />
        ))}
      </div>
    </>
  );
};

export default Landing;
