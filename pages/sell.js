import SellPhoto from "../components/SellPhoto";
import AddPhoto from "../components/AddPhoto";
import Checkbox from "../components/Checkbox";
import { useState } from "react";

const classes = [
  {
    label: "CS122A",
  },
  {
    label: "CS122A",
  },
  {
    label: "CS122A",
  },
  {
    label: "CS122A",
  },
  {
    label: "CS122A",
  },
  {
    label: "CS122A",
  },
  {
    label: "CS122A",
  },
];

export default function Sell() {
  // const [toggleView, setToggleView] = useState(false);
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <div className="mx-[12vw] mt-[7vh]">
        <div className="font-outfit w-fit pt-4">
          <div className="font-bebasNeue text-3xl">LIST YOUR PART</div>
          <div className="text-sm text-rparts-subheadingGray mb-4 font-light">
            Fill out the following prompts that accurately describe your part
          </div>
        </div>
        <div className="flex space-x-6">
          <SellPhoto />
          <AddPhoto />
        </div>
        <input
          type="text"
          className="focus:outline-none font-outfit resize-none text-3xl w-full py-3 border-b mt-3 mb-10 placeholder-rparts-subheadingGray"
          placeholder="Enter Name of Product Here"
        />

        <div className="flex space-x-24">
          <div className="w-1/2">
            <div className="flex space-x-3">
              <div className="text-xl font-outfit font-medium mb-2">
                Proposed Price
              </div>
              <div className="font-outfit text-xs text-rparts-borderGray border rounded-full h-fit w-fit px-1.5 py-0.5 mt-1">
                ?
              </div>
            </div>
            <div className="flex border rounded-2xl px-2 py-2 ">
              <div className="text-rparts-subheadingGray px-2">$</div>

              <input
                type="text"
                className="focus:outline-none w-full placeholder:font-light placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
                placeholder="Enter your proposed price here"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-xl font-outfit font-medium mb-2">
              Condition
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setToggle(0)}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  toggle === 0
                    ? "bg-rparts-orange text-white border rounded-full   border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                NEW
              </button>
              <button
                onClick={() => setToggle(1)}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  toggle === 1
                    ? "bg-rparts-orange text-white border rounded-full border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                LIKE NEW
              </button>
              <button
                onClick={() => setToggle(2)}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  toggle === 2
                    ? "bg-rparts-orange text-white border rounded-full border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                GOOD
              </button>
              <button
                onClick={() => setToggle(3)}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  toggle === 3
                    ? "bg-rparts-orange text-white border rounded-full border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                POOR
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-outfit font-medium mt-4 mb-2">
            Description
          </div>
          <textarea
            className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none  placeholder:font-light placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
            placeholder="Enter product information (utility, usage history, background, etc.)"
          />
        </div>
        <div>
          <div className="text-xl font-outfit font-medium mt-4 mb-2">
            Specifications
          </div>
          <textarea
            className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none placeholder:font-light placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
            placeholder="Type product specifications here (model, color, content, etc.)"
          />
        </div>

        <div className="text-xl font-outfit font-medium mt-4 mb-2">
          Classes Applicable
        </div>
        <div>
          <div className="font-outfit font-light text-sm text-rparts-subheadingGray -mt-2">
            Check as many classes this part is used in. If you do not know,
            leave blank
          </div>
          <div className="grid grid-cols-4 gap-4 font-outfit my-3">
            <div className="">
              <div className="text-rparts-subheadingGray text-sm mb-2">
                Computer Science
              </div>
              <div className="grid grid-cols-2 gap-4 flex">
                <div className="">
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-rparts-subheadingGray text-sm mb-2"></div>
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-rparts-subheadingGray text-sm mb-2">
                Computer Engineering
              </div>
              <div className="grid grid-cols-2 gap-4 flex">
                <div className="">
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-rparts-subheadingGray text-sm mb-2"></div>
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-rparts-subheadingGray text-sm mb-2">
                Electrical Engineering
              </div>
              <div className="grid grid-cols-2 gap-4 flex">
                <div className="">
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-rparts-subheadingGray text-sm mb-2"></div>
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-rparts-subheadingGray text-sm mb-2">
                Mechanical Engineering
              </div>
              <div className="grid grid-cols-2 gap-4 flex">
                <div className="">
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-rparts-subheadingGray text-sm mb-2"></div>
                  <div className="flex flex-col items-start">
                    {classes.map((entry) => (
                      <Checkbox key={entry} curr={entry} className="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="w-1/2 bg-rparts-orange text-white rounded-full py-2 font-outfit">
            LIST ITEM
          </button>
        </div>
      </div>
    </>
  );
}
