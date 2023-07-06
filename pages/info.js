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
        href="#main-content"
        class="absolute px-3 py-2 transition-all -translate-y-full focus:translate-y-0 bg-indigo-800 text-gray-100 text-base font-medium rounded-b-lg mx-4 focus:outline-none focus:ring-4 focus:ring-indigo-500  hover:no-underline hover:bg-indigo-900 hover:text-white z-10"
      >
        {" "}
        FAQ
      </a>
      <div class="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br"></div>
      <Row className="flex justify-center items-start w-10/12 ">
        <Col
          xl={8}
          className="m-0 p-0 flex justify-center items-start flex-col"
        >
          <WhatIsRParts />
          <HowItWorks />
          <main id="main-content">
            <FAQ />
          </main>
        </Col>
      </Row>
    </div>
  );
}
