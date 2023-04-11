import React from "react";
import Image from "next/image";
import ProfilePicture from "../public/profile.svg";

const ProfileImage = () => {
  return (
    <div className="w-64 rounded-3xl">
      <Image src={ProfilePicture} alt="Profile Picture" />
    </div>
  );
};

export default ProfileImage;
