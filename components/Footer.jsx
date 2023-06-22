import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGear } from "react-icons/bs";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
// import { signOut } from "next-auth/react";

const Footer = () => {
  const [message, setMessage] = useState("");

  const submit = () => {
    axios
      .post("/api/sendFeedback", { message: message })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <footer className="bg-rparts-footerBlue flex items-center py-20 mt-48">
      <Row className="w-full">
        <Col xl={6}>
          <div className="grid place-items-start justify-center align-end">
            <span className="flex text-white items-center text-2xl font-regular gap-x-2 font-montserrat">
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
                +1 (909) 214-5009
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mb-7">
              <FiMail className="text-xl text-white mr-4" />
              <a
                className="text-xs text-white "
                href="mailto:contact@parts.com"
                target="_blank"
                norefferer="noopener"
              >
                contact@parts.com
              </a>
            </div>

            <div className="flex mt-16">
              <BiCopyright className="text-xs text-white mr-2" />
              <p className="text-xs text-white font-montserrat">
                ACM - UC Riverside. All Rights Reseverd.
              </p>
            </div>
          </div>
        </Col>
        <Col xl={6} className="w-2/5">
          <p className="text-xl text-white mb-2 font-semibold font-montserrat">
            Give Us Feedback!
          </p>
          <p className="text-sm text-white mb-4 font-montserrat w-full">
            R&apos;Parts is a growing community and we are actively looking for
            feedback from you! Growth and improvement is our priority.
          </p>

          <textarea
            className="w-full h-2/5 pl-5 pt-3 font-outfit resize-none text-black rounded-3xl border-solid focus:outline-none"
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-end mt-3 mb-4">
            <button
              onClick={submit}
              // onClick={() => signOut()}
              className="bg-rparts-orange font-outfit hover:bg-rparts-hoverOrange text-white rounded-2xl w-[10vw] h-[3.5vh] text-sm"
            >
              SEND MESSAGE
            </button>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
