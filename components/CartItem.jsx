import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Product from "../public/product.svg";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const CartItem = ({ entry }) => {
  return (
    <Row className="font-outfit">
      <Col xl={3} className="mt-2">
        <Image
          src={Product}
          alt="Product"
          layout="responsive"
          objectFit="cover"
        />
      </Col>
      <Col xl={7} className="flex flex-col justify-between">
        <div className="font-medium text-xl">{entry.title}</div>
        <div className="text-sm">{entry.description}</div>
        <p className="text-sm">
          Condition:{" "}
          <span className="font-semibold text-rparts-green text-sm">
            {entry.condition}
          </span>
        </p>
        <div className="flex w-32 justify-between border-[1px] border-rparts-borderGray px-3 rounded-3xl mt-3">
          <button className="cursor-pointer text-sm">-</button>
          <div className="cursor-pointer text-sm">{entry.quantity}</div>
          <button className="cursor-pointer text-ms">+</button>
        </div>
      </Col>
      <Col xl={2} className="flex flex-col justify-between items-end">
        <div className="font-semibold text-base">{entry.price}</div>
        <button>
          <HiOutlineTrash className="text-xl stroke-2" />
        </button>
      </Col>
    </Row>
  );
};

export default CartItem;
