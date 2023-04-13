import React from "react";
import Image from "next/image";
import Product from "../public/product.svg";
import { Col, Row } from "react-bootstrap";

const PurchasedItem = ({ entry, i }) => {
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
      <Col xl={2} className="flex items-center">
        <p className="text-lg font-medium">{entry.date}</p>
      </Col>
      <Col xl={2} className="flex items-center">
        <p className="text-lg font-medium">{entry.total}</p>
      </Col>
    </Row>
  );
};

export default PurchasedItem;
