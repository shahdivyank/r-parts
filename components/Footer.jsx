import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGear } from "react-icons/bs";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-rparts-blue flex items-center py-4">
      <Row className="w-full p-0 m-0">
        <Col xl={6}>
          <div className="grid place-items-start justify-center align-end pt-6">
            <span className="flex text-white items-center text-2xl font-medium gap-x-2 font-montserrat">
              <BsGear className="text-xl stroke-[0.5px] rotate-12" />
              <div className="flex">
                <p>{"R'P"}</p>
                <p className="italic">A</p>
                <p>RTS</p>
              </div>
            </span>
            {/* <Row> */}
            <div className="flex flex-row justify-center items-center mt-4 mb-2">
              <FiMapPin className="text-xl text-white mr-4" />
              <p className="text-xs text-white font-montserrat">
                900 University Ave, Riverside, CA 92521
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mb-2">
              <FiPhone className="text-xl text-white mr-4" />
              <p className="text-xs text-white font-montserrat ">
                +1(909)214-5009
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mb-7">
              <FiMail className="text-xl text-white mr-4" />
              <p className="text-xs text-white ">contact@parts.com</p>
            </div>

            <div className="flex flex-row justify-center items-center mt-8 mb-9">
              <BiCopyright className="text-xs text-white mr-2" />
              <p className="text-xs text-white font-montserrat">
                ACM-UC Riverside. All Rights Reseverd.
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6} className=" p-3">
          <p className="text-2xl text-white font-bold font-montserrat">
            Give Us Feedback!
          </p>
          <p className=" text-sm text-white font-montserrat w-9/12">
            R&apos;Parts is a growing community and we are actively looking for
            feedback from you! Growth and improvement is our priority.
          </p>

          <textarea
            className="w-[38vw] h-[13vh] pl-5 pt-2 resize-none text-black rounded-3xl border-solid focus:outline-none"
            placeholder="Type your message here"
          />
          <div className="flex justify-end w-9/12 mt-3">
            <button className="end-0 bg-rparts-orange hover:bg-rparts-hoverOrange text-white rounded-2xl w-[10vw] h-[3.5vh] text-sm">
              SEND MESSAGE
            </button>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
