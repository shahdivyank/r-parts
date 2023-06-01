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
          <Calendar onChange={(day) => handleDayChange(day)} value={day} />
        </div>
        <div className="text-xl font-outfit font-bold text-rparts-black ">
          Choose a time:
          <Row className="flex justify-start items-center">
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
                  py-2 px-4 border-2
                  border-rparts-borderGray"
                >
                  {time}
                </button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
