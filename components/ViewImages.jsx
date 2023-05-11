import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import PartsContext from "./PartsContext";

const ViewImages = () => {
  const { selectedItem } = useContext(PartsContext);

  const [image, setImage] = useState(selectedItem.images[0]);

  return (
    <Row className="flex">
      <Col xl={2}>
        <div onClick={() => setImage(selectedItem.images[0])}>
          {" "}
          <img src={selectedItem.images[0]} />
        </div>

        <div onClick={() => setImage(selectedItem.images[1])}>
          <img src={selectedItem.images[1]} />
        </div>

        <div onClick={() => setImage(selectedItem.images[2])}>
          <img src={selectedItem.images[2]} />
        </div>
      </Col>
      <Col xl={10}>
        <img src={image} />
      </Col>
    </Row>
  );
};

export default ViewImages;
