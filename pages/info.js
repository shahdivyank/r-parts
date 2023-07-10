import InfoBanner from "../components/SVGs/InfoBanner";
import WhatIsRParts from "../components/WhatIsRParts";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import InfoNav from "../components/InfoNav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Info() {
  return (
    <div className="bg-rparts-white flex justify-center items-center flex-col pt-0">
      <InfoBanner />
      <InfoNav />
      <Row className="flex justify-center items-start w-10/12 ">
        <Col
          xl={8}
          className="m-0 p-0 flex justify-center items-start flex-col"
        >
          <WhatIsRParts />
          <HowItWorks />
          <FAQ />
        </Col>
      </Row>
    </div>
  );
}
