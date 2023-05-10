import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Schedule = () => {
  return (
    <div className="rounded-3xl h-fit  my-4 p-4 bg-white border-2 border-rparts-borderGray">
      <div className="text-3xl font-outfit font-bold pt-3 px-3 pb-1">
        {" "}
        Schedule Pick Up{" "}
      </div>
      <div className="text-rparts-subHeadingGray font-outfit px-3 pt-1">
        Pick the date and time that you are able to pick up your purchase(s).
        All pick ups will be at
        <span className="font-semibold"> ACM Clubroom</span> in
        <span className="font-semibold"> Winston Chung Hall 127</span>
        <div className="flex justify-evenly">
          <div className="rounded-3xl h-fit w-1/2 my-4 p-4 bg-white border-2 border-rparts-borderGray">
            <div className="text-2xl w-full flex justify-center">
              1 2 3 4 5 6 7
            </div>
            <div className="text-2xl w-full flex justify-center">
              1 2 3 4 5 6 7
            </div>
            <div className="text-2xl w-full flex justify-center">
              1 2 3 4 5 6 7
            </div>
            <div className="text-2xl w-full flex justify-center">
              1 2 3 4 5 6 7
            </div>
            <div className="text-2xl w-full flex justify-center">
              1 2 3 4 5 6 7
            </div>
            <div className="text-2xl w-full flex justify-center">
              1 2 3 4 5 6 7
            </div>
          </div>
          <div className="text-xl font-outfit font-bold text-rparts-black ">
            Choose a time:
            <Row className="my-2">
              <Col>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
                <button
                  className="  rounded-2xl
                  h-fit
                  font-normal
                 font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4
                  
                  border-2
                  border-rparts-borderGray mx-2"
                >
                  2:30 pm
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
