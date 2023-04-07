import React from "react";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center my-3 mx-12">
      <div className="flex w-1/3 justify-around">
        <div className="text-2xl font-medium">⚙ {"R'Parts"}</div>
        <div className="w-2/3 flex items-center justify-between border-[1px] px-4 rounded-3xl">
          <p className="text-[#858585]">Search {"R'Parts"}</p>
          <p className="">🔍</p>
        </div>
      </div>
      <div className="flex w-1/5 justify-between">
        <div className="font-medium">Market</div>
        <div className="font-medium">Sell</div>
        <div className="font-medium">Info</div>
        <span className="border-[0.5px] border-black"></span>
        <div className="font-medium">🙆🏻‍♀️</div>
        <div className="font-medium">👜</div>
      </div>
    </div>
  );
}

{
  /* <div className="flex w-1/5 justify-between">
<div className="flex justify-between w-1/2">
  <div className="font-medium">Market</div>
  <div className="font-medium">Sell</div>
  <div className="font-medium">Info</div>
</div>
<div className="flex justify-between w-1/2">
  <div className="font-medium">🙆🏻‍♀️</div>
  <div className="font-medium">👜</div>
</div>
</div> */
}
