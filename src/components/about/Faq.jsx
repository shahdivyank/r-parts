"use client";
import { React, useState } from "react";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-red-500 w-3/4 rounded-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </div>
      {isOpen && <div>{answer}</div>}
    </>
  );
};

export default Faq;
