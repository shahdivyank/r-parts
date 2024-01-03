import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

const Stars = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={index} className="text-yellow-400" />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <FaRegStar key={index} className="text-parts-gray-400" />
      ))}
    </div>
  );
};

export default Stars;
