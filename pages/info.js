import InfoBanner from "../components/SVGs/InfoBanner";
import WhatIsRParts from "../components/WhatIsRParts";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Info() {
  return (
    <div className="bg-rparts-white flex justify-center items-center flex-col pt-0">
      <InfoBanner />

      <a
        href="#what-is"
        class="font-outfit px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-b-lg mr-24 hover:bg-rparts-orange hover:text-black z-10"
      >
        {" "}
        What is R’Parts
      </a>

      <a
        href="#how-it-works"
        class="font-outfit px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-b-lg mr-24 hover:bg-rparts-orange hover:text-black z-10"
      >
        {" "}
        How It Works
      </a>

      <a
        href="#faqs"
        class="font-outfit px-3 py-2 transition-all bg-black text-rparts-subheadingGray rounded-b-lg mr-24 hover:bg-rparts-orange hover:text-black z-10"
      >
        {" "}
        FAQ
      </a>

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
