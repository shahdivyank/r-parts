import React from "react";
import Image from "next/image";
import ProfilePicture from "../public/profile.svg";

const ProfileImage = () => {
  return (
    <div className="flex flex-col w-full rounded-3xl font-bebasNeue justify-center items-center gap-y-3">
      <Image src={ProfilePicture} alt="Profile Picture" />
      <p className="font-medium text-4xl text-center">MIKA SHANELA CARODAN</p>
    </div>
  );
};

export default ProfileImage;
