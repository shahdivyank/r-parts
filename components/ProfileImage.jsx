import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const ProfileImage = () => {
  const { data: session } = useSession();

  return (
    session && (
      <div className="flex flex-col w-full rounded-3xl font-bebasNeue justify-center items-center gap-y-3">
        <Image
          src={session.user.image}
          alt="Profile Picture"
          width={128}
          height={128}
        />
        <p className="font-medium text-4xl text-center">{session.user.name}</p>
      </div>
    )
  );
};

export default ProfileImage;
