import React from "react";
import Appointments from "../components/Appointments";
import SoldItems from "../components/SoldItems";
import PurchasedItems from "../components/PurchasedItems";
import ProfileImage from "../components/ProfileImage";

const profile = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[60%] flex justify-center items-center my-20">
        {/* <div className="flex justify-center items-center"> */}
        <div className="w-full flex gap-x-10">
          <div className="">
            <ProfileImage />
          </div>
          <div className="flex w-3/4 flex-col gap-y-10">
            <Appointments />
            <SoldItems />
            <PurchasedItems />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default profile;
