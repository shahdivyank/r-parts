"use client";
import { React, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col w-full rounded-xl cursor-pointer border border-gray-300 p-3 mx-1 my-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-between items-center px-3">
          {question}
          <FiChevronRight
            className={`text-3xl ${
              isOpen ? "rotate-90 duration-300" : "duration-300"
            }`}
          />
        </div>
        {isOpen && <div className="p-3">{answer}</div>}
      </div>
    </>
  );
};

export default Faq;
