import React from "react";

const Error = ({ code, name, message, dev }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-center text-9xl text-black m-0 font-bebas">{code}</p>
      <p className="text-center text-md md:text-lg text-gray-500 m-0 font-outfit">
        {name}
      </p>
      <p className="text-center text-sm md:text-md  text-gray-500 m-0 font-outfit">
        {message}
      </p>
      <p className="text-center text-md md:text-lg text-gray-500 m-0 font-outfit">
        {dev}
      </p>
    </div>
  );
};

export default Error;
