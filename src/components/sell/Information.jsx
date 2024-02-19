const Information = ({ setState }) => {
  return (
    <div>
      <input
        // value={data.name}
        name="name"
        //  onChange={handleTyping}
        type="text"
        className="focus:outline-none font-outfit resize-none text-3xl w-full py-3 border-b mt-3 mb-10 text-parts-gray-500 bg-parts-gray-100"
        placeholder="Enter Name of Product Here"
      />

      <div className="flex justify-between mt-4">
        <div className="w-5/12 mr-2">
          <div className="text-xl font-outfit font-medium mb-2">Condition</div>
          <select
            name="condition"
            className="focus:outline-none w-full border rounded-2xl px-4 py-3 bg-transparent"
          >
            <option value=""></option>
            <option value="new">New</option>
            <option value="likeNew">Like New</option>
            <option value="good">Good</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div className="w-5/12 ml-2">
          <div className="text-xl font-outfit font-medium mb-2">Brand</div>
          <select
            name="brand"
            className="focus:outline-none w-full border rounded-2xl px-4 py-3 bg-transparent"
          >
            <option value=""></option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
          </select>
        </div>
      </div>

      <div>
        <div className="text-xl font-outfit font-medium mt-4 mb-2">
          Description
        </div>
        <textarea
          // value={data.description}
          name="description"
          // onChange={handleTyping}
          className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none  placeholder:font-light placeholder:text-parts-gray-500 placeholder:font-outfit placeholder:font-regular bg-parts-gray-100"
          placeholder="Enter product information (utility, usage history, background, etc.)"
        />
      </div>

      <div>
        <div className="text-xl font-outfit font-medium mt-4 mb-2">
          Additional Information
        </div>
        <textarea
          //  value={data.specifications}
          name="specifications"
          // onChange={handleTyping}
          className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none placeholder:font-light placeholder:text-parts-gray-500 placeholder:font-outfit placeholder:font-regular bg-parts-gray-100"
          placeholder="Type product specifications here (model, color, content, etc.)"
        />
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={() => setState(2)}
          className="w-1/2 bg-parts-orange text-white rounded-full py-2 mb-32 font-outfit"
        >
          LIST PART
        </button>
      </div>
    </div>
  );
};

export default Information;
