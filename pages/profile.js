import React from "react";
import Appointments from "../components/Appointments";
import SoldItems from "../components/SoldItems";
import PurchasedItems from "../components/PurchasedItems";
import ProfileImage from "../components/ProfileImage";

const profile = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="w-[60%] flex justify-center items-center my-20">
        <div className="w-full flex gap-x-10">
          <div>
            <ProfileImage />
          </div>
          <div className="flex w-full flex-col gap-y-10">
            <Appointments />
            <SoldItems />
            <PurchasedItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default profile;
