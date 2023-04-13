import React from "react";
import Image from "next/image";
import Product from "../public/product.svg";
import { Col, Row } from "react-bootstrap";

const Appointment = ({ entry, i }) => {
  return (
    <Row className="my-3 px-8">
      <Col xl={1} className="flex items-center font-medium">
        {i}
      </Col>
      <Col xl={7} className="gap-x-2 flex items-center">
        <Image src={Product} alt="Product" className="w-20" />
        <div>
          <p className="text-lg font-medium">{entry.title}</p>
          <p className="font-light">
            Order Number:{" "}
            <span className="font-medium">{entry.orderNumber}</span>
          </p>
          <p className="font-light">
            Quantity: <span className="font-medium">{entry.quantity}</span>
          </p>
        </div>
      </Col>
      <Col xl={2}>
        <p className="font-medium">{entry.time}</p>
        <p className="font-medium">{entry.date}</p>
      </Col>
      <Col xl={2}>
        <button className="rounded-3xl border-[1px] border-rparts-subHeadingGray text-xs text-rparts-subHeadingGray w-full hover:bg-rparts-subHeadingGray hover:text-rparts-wrappergGray">
          RESCHEDULE
        </button>
        <button className="rounded-3xl border-[1px] border-rparts-subHeadingGray text-xs text-rparts-subHeadingGray w-full hover:bg-rparts-subHeadingGray hover:text-rparts-wrappergGray">
          CANCEL
        </button>
      </Col>
    </Row>
  );
};

export default Appointment;
