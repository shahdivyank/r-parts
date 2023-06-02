import SellPhoto from "../components/SellPhoto";
import AddPhoto from "../components/AddPhoto";
import Checkbox from "../components/Checkbox";
import Popover from "../components/Popover";
import { useContext, useState } from "react";
import PartsContext from "../components/PartsContext";
import axios from "axios";

const computerScienceClasses = ["CS10A", "CS10B", "CS10C"];

const electricalClasses = ["EE128", "EE111", "EE120B"];

export default function Sell() {
  const { user } = useContext(PartsContext);

  // enum values include new, like new, good, poor
  const [condition, setCondition] = useState("new");
  const [data, setData] = useState({
    name: null,
    price: null,
    description: null,
    specifications: null,
    classes: null,
  });
  const [images, setImages] = useState([]);
  const [classes, setClasses] = useState([]);

  const handleTyping = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const listItem = () => {
    const packet = {
      ...data,
      price: parseFloat(data.price),
      condition,
      uid: user.uid,
      email: user.email,
      user: user.name,
      images: images,
      classes: classes,
    };
    axios.post("/api/sellItems", packet).then((response) => {
      console.log(response);
    });
  };

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
          {images.map((image, index) => (
            <SellPhoto key={index} image={image} />
          ))}
          <AddPhoto setImages={setImages} images={images} />
        </div>
        <input
          value={data.name}
          name="name"
          onChange={handleTyping}
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
              <Popover />
            </div>
            <div className="flex border rounded-2xl px-2 py-2 ">
              <div className="text-rparts-subheadingGray px-2">$</div>

              <input
                value={data.price}
                name="price"
                onChange={handleTyping}
                type="number"
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
                onClick={() => setCondition("new")}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  condition === "new"
                    ? "bg-rparts-orange text-white border rounded-full   border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                NEW
              </button>
              <button
                onClick={() => setCondition("like new")}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  condition === "like new"
                    ? "bg-rparts-orange text-white border rounded-full border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                LIKE NEW
              </button>
              <button
                onClick={() => setCondition("good")}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  condition === "good"
                    ? "bg-rparts-orange text-white border rounded-full border-rparts-orange"
                    : "bg-transparent"
                }`}
              >
                GOOD
              </button>
              <button
                onClick={() => setCondition("poor")}
                className={`text-sm w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2.5 px-3 ${
                  condition === "poor"
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
            value={data.description}
            name="description"
            onChange={handleTyping}
            className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none  placeholder:font-light placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
            placeholder="Enter product information (utility, usage history, background, etc.)"
          />
        </div>
        <div>
          <div className="text-xl font-outfit font-medium mt-4 mb-2">
            Specifications
          </div>
          <textarea
            value={data.specifications}
            name="specifications"
            onChange={handleTyping}
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
                <div className="flex items-end">
                  <div className="text-rparts-subheadingGray text-sm mb-2"></div>
                  <div className="flex flex-col items-start">
                    {computerScienceClasses.map((entry, index) => (
                      <Checkbox
                        key={index}
                        label={entry}
                        setState={setClasses}
                        state={classes}
                      />
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
                    {electricalClasses.map((entry, index) => (
                      <Checkbox
                        key={index}
                        label={entry}
                        setState={setClasses}
                        state={classes}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={listItem}
            className="w-1/2 bg-rparts-orange text-white rounded-full py-2 font-outfit"
          >
            LIST ITEM
          </button>
        </div>
      </div>
    </>
  );
}
