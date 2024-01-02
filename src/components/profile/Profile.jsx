import React from "react";
import Information from "./Information";
import Data from "./Data";

const Profile = () => {
  return (
    <div className="w-11/12 grid grid-cols-4">
      <Information />
      <Data />
    </div>
  );
};

export default Profile;
