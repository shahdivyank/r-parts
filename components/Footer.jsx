import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGear } from "react-icons/Bs";
import { FiMapPin, FiPhone, FiMail } from "react-icons/Fi";
import { BiCopyright } from "react-icons/Bi";

const Footer = () => {
  // const logoStyles = { color: "white", fontSize: "1.5em" };
  const contactStyles = { color: "white", fontSize: "1.2em" };
  const tradeStyle = { color: "white" };

  return (
    <footer>
      <Row>
        <div className="bg-rparts-blue flex items-center gap-4">
          <Col>
            <div className="grid justify-items-center text-left ">
              {/* <div className="flex flex-row"> */}
              <BsGear className="text-white flex glow" />
              <p className="text-xl text-white font-bold ">R&apos;Parts</p>
              {/* </div> */}
              {/* <Row> */}
              {/* <div className="flex flex-row"> */}
              <FiMapPin style={contactStyles} />
              <p className="text-base text-white ">
                900 University Ave, Riverside, CA 92521
              </p>
              {/* </div> */}
              {/* <div className="flex flex-row"> */}
              <FiPhone style={contactStyles} />
              <p className="text-base text-white ">+1(909)214-5009</p>
              {/* </div> */}
              {/* <div className="flex flex-row"> */}
              <FiMail style={contactStyles} />
              <p className="text-base text-white ">contact@parts.com</p>
              {/* </div> */}
              {/* </Row> */}
              {/* <Row> */}
              {/* <div className="flex flex-row"> */}
              <BiCopyright style={tradeStyle} />
              <p className="text-xs text-white">
                ACM-UC Riverside. All Rights Reseverd.
              </p>
              {/* </div> */}
              {/* </Row> */}
            </div>
          </Col>
          <Col>
            <Row>
              <p className="text-2xl text-white font-bold ">Give Us Feedback</p>
              <p className=" text-white">
                R&apos;Parts is a growing community and we are actively looking
                for feedback from you! Growth and improvement is our priority.
              </p>
            </Row>
            <Row>
              <div className="flex flex-wrap">
                <textarea className="w-[40vw] resize-none text-black rounded-2xl border-solid " />
                <button className="bg-rparts-orange hover:bg-rparts-juice text-white rounded-2xl w-[10vw] h-[3.5vh] text-sm">
                  SEND MESSAGE
                </button>
              </div>
            </Row>
          </Col>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
