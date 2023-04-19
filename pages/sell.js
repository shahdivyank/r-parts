import SellPhoto from "../components/SellPhoto";
import AddPhoto from "../components/AddPhoto";

export default function Sell() {
  return (
    <>
      <div className="mx-48">
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
          className="font-outfit resize-none text-3xl w-full px-3 py-3 border-b mt-5 mb-10 placeholder-rparts-subheadingGray"
          placeholder="Enter Name of Product Here"
        />

        <div className="flex space-x-24">
          <div className="w-1/2">
            <div className="text-2xl font-outfit font-medium mb-2">
              Proposed Price
            </div>
            <input
              type="text"
              className="w-full border rounded-2xl px-3 py-2 placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
              placeholder="Enter your proposed price here"
            />
          </div>
          <div className="w-1/2">
            <div className="text-2xl font-outfit font-medium mb-2">
              Condition
            </div>
            <div className="flex space-x-4">
              <button className="w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2 px-3 hover:bg-rparts-orange hover:text-white">
                NEW
              </button>
              <button className="w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2 px-3 hover:bg-rparts-orange hover:text-white">
                LIKE NEW
              </button>
              <button className="w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2 px-3 hover:bg-rparts-orange hover:text-white">
                GOOD
              </button>
              <button className="w-1/2 text-rparts-subheadingGray font-outfit text-center border rounded-full border-rparts-subheadingGray py-2 px-3 hover:bg-rparts-orange hover:text-white">
                POOR
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-outfit font-medium mt-4 mb-2">
            Description
          </div>
          <textarea
            className="w-full h-[20vh] border rounded-2xl px-4 py-3 resize-none placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
            placeholder="Enter product information (utility, usage history, background, etc.)"
          />
        </div>
        <div>
          <div className="text-2xl font-outfit font-medium mt-4 mb-2">
            Specifications
          </div>
          <textarea
            className="w-full h-[20vh] border rounded-2xl px-4 py-3 resize-none placeholder:text-rparts-subheadingGray placeholder:font-outfit placeholder:font-regular"
            placeholder="Type  product specifications here (model, color, content, etc.)"
          />
        </div>
      </div>
    </>
  );
}
