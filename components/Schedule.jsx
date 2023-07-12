import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PartsContext from "./PartsContext";
import Calendar from "react-calendar";
// default styles for calendar need to customize
import "react-calendar/dist/Calendar.css";

const times = ["2:30PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM"];

const Schedule = () => {
  const { order, setOrder } = useContext(PartsContext);

  // enum values are the values inside the times array
  const [time, setTime] = useState("2:30PM");
  const [day, setDay] = useState(new Date());

  // remove after toggle behavior is figured out
  console.log(time, setTime);

  const handleTimeChange = (timeOption) => {
    setOrder({ ...order, time: timeOption });
  };

  const handleDayChange = (dayOption) => {
    setDay(dayOption);
    setOrder({ ...order, day: dayOption });
  };

  return (
    <div className="rounded-3xl h-fit  my-4 p-4 bg-white border-[1px] border-rparts-borderGray">
      <div className="text-3xl font-outfit font-semibold pt-3 px-3 pb-1">
        {" "}
        Schedule Pick Up{" "}
      </div>
      <div className="text-rparts-subHeadingGray font-outfit font-light px-3">
        Pick the date and time that you are able to pick up your purchase(s).
        All pick ups will be at
        <span className="font-medium"> ACM Clubroom</span> in
        <span className="font-medium"> Winston Chung Hall 127</span>
        <div className="w-full flex flex-col">
          <div className="flex justify-evenly my-4">
            <Calendar onChange={(day) => handleDayChange(day)} value={day} />
          </div>
          <div className="text-xl font-outfit font-medium text-rparts-black">
            Choose a time:
            <Row className="flex justify-start items-center mt-3">
              {times.map((time, index) => (
                <Col
                  key={index}
                  xl={6}
                  className="flex justify-center items-center"
                >
                  <button
                    onClick={() => handleTimeChange(time)}
                    className="rounded-2xl
                  h-fit
                  font-normal
                  font-outfit
                  hover:bg-rparts-orange
                  hover:text-white
                  py-2 px-4 border-[1px]
                  border-rparts-borderGray my-2"
                  >
                    {time}
                  </button>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
