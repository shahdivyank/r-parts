import React from "react";

const Search = () => {
  return (
    <div className="flex-col w-full py-2  font-outfit">
      <div className="flex w-full justify-between items-end py-2">
        <div className=" text-2xl font-medium">Find a Match</div>
        <div className=" text-gray-500 ">
          <text>{"Don't see your item?"}</text>
          <text className="underline font-medium px-1">Click Here</text>
        </div>
      </div>

      <div className="w-full  flex justify-around items-end">
        <input
          type="text"
          className="w-5/6 py-2 px-2 font-medium text-gray-500 rounded-md"
          placeholder="Tell us what you are selling"
        />
        <buttom className="bg-parts-orange px-10 py-2 w-fit rounded-md text-white text-xl">
          {" "}
          SEARCH{" "}
        </buttom>
      </div>
    </div>
  );
};

export default Search;
