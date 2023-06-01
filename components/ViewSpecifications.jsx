import React, { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import PartsContext from "./PartsContext";

const ViewSpecifications = () => {
  const { selectedItem } = useContext(PartsContext);
  return (
    <div className="rounded-3xl bg-rparts-wrapperGray font-outfit p-3">
      <p className="text-2xl mb-2">Specifications</p>
      <div className="list-normal">
        {selectedItem.data.specifications.map((classApplicable, index) => (
          <div key={index} className="flex items-center">
            <FaCircle className="mr-2 text-xs" />
            <p>{classApplicable}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSpecifications;
