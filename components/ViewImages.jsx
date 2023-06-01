import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const ViewImages = ({ images, first }) => {
  const [image, setImage] = useState(first);

  return (
    <Row className="flex">
      <Col xl={2}>
        <div onClick={() => setImage(images[0])}>
          {" "}
          <img src={images[0]} />
        </div>

        <div onClick={() => setImage(images[1])}>
          <img src={images[1]} />
        </div>

        <div onClick={() => setImage(images[2])}>
          <img src={images[2]} />
        </div>
      </Col>
      <Col xl={10}>
        <img src={image} />
      </Col>
    </Row>
  );
};

export default ViewImages;
