import React, { useContext } from "react";
import Image from "next/image";
import PartsContext from "./PartsContext";

const ProfileImage = () => {
  const { user } = useContext(PartsContext);
  return (
    user && (
      <div className="flex flex-col w-full rounded-3xl font-bebasNeue justify-center items-center gap-y-3">
        <Image
          src={user.image}
          alt="Profile Picture"
          width={128}
          height={128}
        />
        <p className="font-medium text-4xl text-center">{user.name}</p>
      </div>
    )
  );
};

export default ProfileImage;
