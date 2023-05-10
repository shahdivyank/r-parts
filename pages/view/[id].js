import React from "react";
import { Col, Row } from "react-bootstrap";
import ViewImages from "../../components/ViewImages";
import ViewDescription from "../../components/ViewDescription";
import ViewClasses from "../../components/ViewClasses";
import ViewSpecifications from "../../components/ViewSpecifications";

const View = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-10/12">
        <p className="font-outfit text-rparts-subheadingGray">
          MARKET / PRODUCT
        </p>
        <Row>
          <Col xl={6}>
            <ViewImages />
          </Col>
          <Col xl={6}>
            <ViewDescription />
          </Col>
          <Col xl={5}>
            <ViewClasses />
          </Col>
          <Col xl={7}>
            <ViewSpecifications />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default View;
