"use client";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";

const Data = () => {
  const [activeButton, setActiveButton] = useState("Orders");

  return (
    <div className="w-full">
      <Navigation
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <Dashboard activeButton={activeButton} />
    </div>
  );
};

export default Data;
