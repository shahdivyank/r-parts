"use client";
import { useState } from "react";
import Information from "./Information";
import Confirmation from "./Confirmation";
import Header from "./Header";

const Sell = () => {
  const [state, setState] = useState(2);
  return (
    <div className="bg-gray-100 w-3/4 h-full justify-center">
      <Header state={state} />
      {state === 1 && <Information setState={setState} />}
      {state === 2 && <Confirmation />}
    </div>
  );
};

export default Sell;
