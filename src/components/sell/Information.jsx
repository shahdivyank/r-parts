const Information = ({ setState }) => {
  return (
    <div>
      <div className="flex justify-between my-10">
        <div className="border rounded-2xl border-gray-400 flex-grow mr-2 h-28"></div>{" "}
        <div className="border rounded-2xl border-gray-400 flex-grow mx-1 h-28"></div>{" "}
        <div className="border rounded-2xl border-gray-400 flex-grow ml-2 h-28"></div>{" "}
      </div>

      <input
        // value={data.name}
        name="name"
        //  onChange={handleTyping}
        type="text"
        className="focus:outline-none font-outfit resize-none text-3xl w-full py-3 border-b my-6 placeholder:text-parts-gray-500 bg-parts-gray-100"
        placeholder="Enter Name of Product Here"
      />

      <div className="flex justify-between mt-4">
        <div className="w-5/12 mr-2">
          <div className="text-xl font-outfit font-medium mb-2">Condition</div>
          <select
            name="condition"
            className="focus:outline-none w-full border rounded-2xl p-4 bg-parts-gray-100"
          >
            <option value=""></option>
            <option value="new">New</option>
            <option value="likeNew">Like New</option>
            <option value="good">Good</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div className="w-5/12 ml-2">
          <div className="text-xl font-outfit font-medium mb-4">Brand</div>
          <select
            name="brand"
            className="focus:outline-none w-full border rounded-2xl px-4 py-3 bg-parts-gray-100"
          >
            <option value=""></option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
          </select>
        </div>
      </div>

      <div>
        <div className="text-xl font-outfit font-medium my-2">Description</div>
        <textarea
          // value={data.description}
          name="description"
          // onChange={handleTyping}
          className="focus:outline-none w-full h-[15vh] border rounded-2xl p-4 resize-none  placeholder:font-light placeholder:text-parts-gray-500 placeholder:font-outfit bg-parts-gray-100"
          placeholder="Enter product information (utility, usage history, background, etc.)"
        />
      </div>

      <div>
        <div className="text-xl font-outfit font-medium my-2">
          Additional Information
        </div>
        <textarea
          //  value={data.specifications}
          name="specifications"
          // onChange={handleTyping}
          className="focus:outline-none w-full h-[15vh] border rounded-2xl p-4 resize-none placeholder:font-light placeholder:text-parts-gray-500 placeholder:font-outfit bg-parts-gray-100"
          placeholder="Type product specifications here (model, color, content, etc.)"
        />
      </div>

      <div className="flex justify-center my-28">
        <button
          onClick={() => setState(2)}
          className="w-2/5 bg-parts-orange text-white rounded-full py-2 font-outfit"
        >
          LIST PART
        </button>
      </div>
    </div>
  );
};

export default Information;
