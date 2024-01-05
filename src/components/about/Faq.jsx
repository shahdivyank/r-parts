"use client";
import { React, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col w-11/12 rounded-xl cursor-pointer border-2 border-gray-400 p-3 m-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-between">
          {question}
          <FiChevronRight className={`text-3xl ${isOpen ? "rotate-90" : ""}`} />
        </div>
        {isOpen && <div className="">{answer}</div>}
      </div>
    </>
  );
};

export default Faq;
