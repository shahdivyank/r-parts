import React from "react";
import { FaCircle } from "react-icons/fa";

const classes = ["CS122A", "CS177", "EE169", "EE120"];

const ViewClasses = () => {
  return (
    <div className="rounded-3xl bg-rparts-wrappergGray font-outfit p-3">
      <p className="text-2xl mb-2">Classes Applicable</p>
      <div className="list-normal">
        {classes.map((classApplicable, index) => (
          <div key={index} className="flex items-center">
            <FaCircle className="mr-2 text-xs" />
            <p>{classApplicable}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewClasses;
