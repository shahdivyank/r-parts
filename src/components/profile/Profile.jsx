import React from "react";
import Information from "./Information";
import Data from "./Data";
import Navigation from "./Navigation";

const Profile = () => {
  return (
    <div className="w-11/12 grid grid-cols-4">
      <Information />
      <Data />
      <Navigation />
    </div>
  );
};

export default Profile;
