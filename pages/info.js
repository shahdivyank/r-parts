import InfoBanner from "../components/SVGs/InfoBanner";
import WhatIsRParts from "../components/WhatIsRParts";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import InfoNav from "../components/InfoNav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Info() {
  return (
    <div className="bg-rparts-white flex justify-center items-center flex-col pt-0 w-full">
      <div className="w-10/12 flex justify-center items-center flex-col">
        <InfoBanner />

        <Row>
          <Col xl={3}>
            <InfoNav />
          </Col>

          <Col xl={7}>
            <WhatIsRParts />
            <HowItWorks />
            <FAQ />
          </Col>
        </Row>
      </div>
    </div>
  );
}
