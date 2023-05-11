import React, { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import PartsContext from "./PartsContext";

const ViewClasses = () => {
  const { selectedItem } = useContext(PartsContext);

  return (
    <div className="rounded-3xl bg-rparts-wrapperGray font-outfit p-3">
      <p className="text-2xl mb-2">Classes Applicable</p>
      <div className="list-normal">
        {selectedItem.classes.map((classApplicable, index) => (
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
