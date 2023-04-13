import React, { useState } from "react";
import SoldItem from "./SoldItem";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Col, Row, Accordion } from "react-bootstrap";

const soldItemsEntries = [
  {
    title: "ESP8266 WiFi Bee",
    orderNumber: "11-02408123120",
    quantity: "1",
    date: "11/02/2021",
    total: "$57.09",
  },
  {
    title: "ESP8266 WiFi Bee",
    orderNumber: "11-02408123120",
    quantity: "1",
    date: "11/02/2021",
    total: "$57.09",
  },
];

const SoldItems = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Accordion defaultActiveKey="0" className="">
      <Accordion.Item
        className="!border-none underlayColor=transparent font-outfit"
        eventKey="0"
      >
        <Accordion.Button
          onClick={() => setToggle(!toggle)}
          className={`!bg-rparts-wrappergGray text-black after:hidden focus:!shadow-none ${
            toggle
              ? `!rounded-t-3xl !rounded-b-3xl delay-300	`
              : `!rounded-t-3xl`
          } px-12 py-4`}
        >
          <div className="w-full flex justify-between items-center">
            <p className="text-black text-2xl font-medium m-0 ">Sold Items</p>
            <div className="text-3xl">
              {toggle ? (
                <IoIosArrowForward className="stroke-[10px] " />
              ) : (
                <IoIosArrowDown className="stroke-[10px]" />
              )}
            </div>
          </div>
        </Accordion.Button>
        <Accordion.Body
          className="!bg-rparts-wrappergGray rounded-b-3xl"
          eventKey={0}
        >
          <span className="relative flex border-[1px] border-rparts-borderGray mx-4 -top-4" />
          <Row className="mb-4 flex justify-start px-8">
            <Col xl={1}></Col>
            <Col xl={7} className="font-light text-xs">
              ITEM
            </Col>
            <Col xl={2} className="font-light text-xs">
              DATE
            </Col>
            <Col xl={2} className="font-light text-xs">
              TOTAL
            </Col>
          </Row>
          {soldItemsEntries.map((entry, index) => (
            <SoldItem key={index} entry={entry} i={index + 1} />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SoldItems;
