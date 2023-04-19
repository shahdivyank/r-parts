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

        <div className="flex">
          <div>
            <div className="text-xl font-outfit font-medium">
              Proposed Price
            </div>
            <input
              type="text"
              className=" border rounded-full px-3 py-3 placeholder:font-outfit"
              placeholder="Enter your proposed price here"
            />
          </div>
          <div>
            <div className="text-xl font-outfit font-medium">
              Proposed Price
            </div>
            <input
              type="text"
              className="border rounded-full px-3 py-3 placeholder:font-outfit"
              placeholder="Enter your proposed price here"
            />
          </div>
        </div>
      </div>
    </>
  );
}
