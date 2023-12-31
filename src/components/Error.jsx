import React from "react";

const Error = ({ name, code, message, dev }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-6xl text-black m-0 font-bebas">{code}</p>
      <p className="text-center text-lg md:text-2xl text-gray-500 m-0">
        {name}
      </p>
      <p className="text-center text-sm md:text-lg  text-gray-500 m-0">
        {message}
      </p>
      <p className="text-center text-sm md:text-lg text-gray-500-200 m-0">
        {dev}
      </p>
    </div>
  );
};

export default Error;
