import React, { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import PartsContext from "./PartsContext";

const CartItem = ({
  id,
  title,
  description,
  condition,
  quantity,
  price,
  image,
}) => {
  const { cart, setCart, total, setTotal } = useContext(PartsContext);

  const increaseQuantity = () => {
    setTotal(total + price);
    setCart(
      cart.map((item, index) =>
        item.id === id ? { ...item, quantity: cart[index].quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = () => {
    setTotal(total - price);
    setCart(
      cart.map((item, index) =>
        item.id === id ? { ...item, quantity: cart[index].quantity - 1 } : item
      )
    );
  };

  return (
    <Row className="font-outfit">
      <Col xl={3} className="mt-2">
        <Image src={image} alt="Product" width={128} height={128} />
      </Col>
      <Col xl={7} className="flex flex-col justify-between">
        <div className="font-medium text-xl">{title}</div>
        <div className="text-sm">{description}</div>
        <p className="text-sm">
          Condition:{" "}
          <span className="font-semibold text-rparts-green text-sm">
            {condition}
          </span>
        </p>
        <div className="flex w-32 justify-between border-[1px] border-rparts-borderGray px-3 rounded-3xl mt-3">
          <button className="cursor-pointer text-sm" onClick={decreaseQuantity}>
            -
          </button>
          <div className="cursor-pointer text-sm">{quantity}</div>
          <button className="cursor-pointer text-ms" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </Col>
      <Col xl={2} className="flex flex-col justify-between items-end">
        <div className="font-semibold text-base">${price}.00</div>
        <button>
          <HiOutlineTrash className="text-xl stroke-2" />
        </button>
      </Col>
    </Row>
  );
};

export default CartItem;
