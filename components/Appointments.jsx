import React from "react";
import Appointment from "./Appointment";
import { Col, Row } from "react-bootstrap";

const appointmentEntries = [
  {
    title: "ESP8266 WiFi Bee",
    orderNumber: "11-02408123120",
    quantity: "1",
    time: "2:00 PM",
    date: "11/02/2021",
    total: "$57.09",
  },
  {
    title: "ESP8266 WiFi Bee",
    orderNumber: "11-02408123120",
    quantity: "1",
    time: "2:00 PM",
    date: "11/02/2021",
    total: "$57.09",
  },
];

const Appoointments = () => {
  return (
    <>
      <div className="w-[45%] border-[1px] border-rparts-borderGray rounded-3xl p-3 font-outfit">
        <div className="flex items-center mb-10 pl-7 w-full">
          <p className="text-black text-2xl font-medium">Appointments</p>
        </div>
        <span className="relative flex border-[1px] border-rparts-borderGray mx-4 -top-4" />
        <Row className="mb-4 flex justify-start px-8">
          <Col xl={1}></Col>
          <Col xl={7} className="font-light text-xs">
            ITEM
          </Col>
          <Col xl={2} className="font-light text-xs">
            TIME
          </Col>
          <Col xl={2} className="font-light text-xs">
            TOTAL
          </Col>
        </Row>
        {appointmentEntries.map((entry, index) => (
          <Appointment key={index} entry={entry} i={index + 1} />
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default Appoointments;
