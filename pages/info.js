import InfoBanner from "../components/SVGs/InfoBanner";
import WhatIsRParts from "../components/WhatIsRParts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Info() {
  return (
    <div className="bg-rparts-white flex justify-center items-center flex-col pt-0">
      <InfoBanner />

      <Row className="flex justify-center items-start w-10/12 ">
        <Col
          xl={8}
          className="m-0 p-0 flex justify-center items-start flex-col"
        >
          <WhatIsRParts />
        </Col>
      </Row>
    </div>
  );
}
