import React from "react";
import { FaCircle } from "react-icons/fa";

const specifications = [
  "Wi-Fi Direct (P2P),soft-AP",
  "Built-in TCP/IP protocol stack",
  "Built-in low-power 32-bit CPU: can work as an application processor",
  "Support WPA WPA2/WPA2-PSK encryption",
  "Support UART interface",
  "Support for TTL serial port to wireless application",
  "Working voltage: 3.3V power <240Ma",
  "Wireless standard: IEEE802.11b/g/n",
  "Frequency: 2.4 GHz",
];

const ViewSpecifications = () => {
  return (
    <div className="rounded-3xl bg-rparts-wrapperGray font-outfit p-3">
      <p className="text-2xl mb-2">Classes Applicable</p>
      <div className="list-normal">
        {specifications.map((classApplicable, index) => (
          <div key={index} className="flex items-center">
            <FaCircle className="mr-2 text-xs" />
            <p>{classApplicable}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSpecifications;
