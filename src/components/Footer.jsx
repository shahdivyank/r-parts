"use client";
import React, { useState } from "react";
import { BsGear } from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import Button from "./Button";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleMessageSubmit = () => {
    if (message.trim() !== "") {
      // TODO: API CALL to submit message
      //   ... then
      setMessage("");
    }
  };

  return (
    <div className="bg-parts-blue text-white py-[5%] font-outfit w-full flex justify-center">
      <div className="flex justify-evenly w-[80%]">
        <div className="flex flex-col h-full w-11/12 justify-between">
          <div className="space-y-2">
            <p className="flex items-center text-2xl mb-5 font-montserrat font-medium">
              <BsGear className="stroke-[0.5px] rotate-12 mr-2" />
              <span>{" R'P"}</span>
              <span className="italic">A</span>RTS
            </p>
            <div className="flex items-center font-extralight gap-x-5">
              <HiOutlineLocationMarker className="text-xl stroke-2" />
              <p>900 University Ave, Riverside, CA 92521</p>
            </div>
            <div className="flex items-center gap-x-5 font-extralight">
              <HiOutlinePhone className="text-xl stroke-2" />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="flex items-center gap-x-5 font-extralight">
              <HiOutlineMail className="text-xl stroke-2" />
              <p>contact@rparts.com</p>
            </div>
          </div>
          <div className="font-extralight text-xs">
            COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY RPARTS
          </div>
        </div>
        <div className="flex flex-col justify-between  gap-y-5 w-10/12">
          <div>
            <p className="text-xl font-medium">Give Us your Feedback!</p>
            <span className="text-sm font-extralight">
              {" R'Parts"} is a growing community and we are actively looking
              for feedback from you! Growth and improvement is our top priority.
            </span>
          </div>
          <textarea
            type="textarea"
            value={message}
            placeholder="Type your message here..."
            className="h-full rounded-md text-black p-3 text-sm focus:outline-none resize-none"
            maxLength={200}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="self-end">
            <Button
              text="SEND MESSAGE"
              color="bg-orange"
              rounded="full"
              size="sm"
              onClick={handleMessageSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
