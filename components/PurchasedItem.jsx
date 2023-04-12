import React from "react";
import Image from "next/image";
import Product from "../public/product.svg";
import { Col, Row } from "react-bootstrap";

const PurchasedItem = ({ entry, i }) => {
  return (
    <Row className="my-3">
      <Col xl={1} className="flex items-center font-medium">
        {i}
      </Col>
      <Col xl={7} className="flex gap-x-2">
        <div className="w-fit">
          <Image src={Product} alt="Product" />
        </div>
        <div>
          <p className="text-lg font-medium">{entry.title}</p>
          <p>
            Order Number:{" "}
            <span className="font-medium">{entry.orderNumber}</span>
          </p>
          <p>
            Quantity: <span className="font-medium">{entry.quantity}</span>
          </p>
        </div>
      </Col>
      <Col xl={2}>
        <p className="text-lg font-medium">{entry.date}</p>
      </Col>
      <Col xl={2}>
        <p className="text-lg font-medium">{entry.total}</p>
      </Col>
    </Row>
  );
};

export default PurchasedItem;
