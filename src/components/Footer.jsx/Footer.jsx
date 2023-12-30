import React from "react";
import { BsGear } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button";

const Footer = () => {
  return (
    <div className="bg-parts-blue text-white h-[350px] p-14 flex justify-evenly">
      <div className="flex flex-col h-full justify-between">
        {/* RPARTS LOGO */}
        <div className="space-y-2">
          <span className="flex items-center text-2xl font-medium mb-5">
            <BsGear className="stroke-[0.5px] rotate-12 mr-2" />{" "}
            <span>{" R'P"}</span>
            <span className="italic">A</span>RTS
          </span>

          {/* CONTACT INFO */}
          <div className="flex items-center gap-x-5">
            <HiOutlineLocationMarker className="text-xl stroke-2" />
            <p className="font-medium">
              900 University Ave, Riverside, CA 92521
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <HiOutlinePhone className="text-xl stroke-2" />
            <p className="font-medium">+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center gap-x-5">
            <HiOutlineMail className="text-xl stroke-2" />
            <p className="font-medium">contact@rparts.com</p>
          </div>
        </div>
        <p className="text-sm font-light">
          © ACM - UC Riverside. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-y-5">
        <div>
          <p className="text-xl font-medium">Give Us your Feedback!</p>
          <span className="text-sm">
            {" R'Parts"} is a growing community and we are actively looking for
            feedback from you! <br />
            <span>Growth and improvement is our top priority.</span>
          </span>
        </div>
        <textarea
          type="textarea"
          placeholder="Type your message here..."
          className="h-full rounded-3xl text-black p-3 focus:outline-parts-orange text-sm"
          style={{ resize: "none" }}
        />
        <div className="self-end">
          <Button
            text={"SEND MESSSAGE"}
            color="bg-orange"
            rounded="full"
            size="sm"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
