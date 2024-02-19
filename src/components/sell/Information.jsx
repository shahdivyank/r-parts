const Information = ({ setState }) => {
  return (
    <div>
      <div>
        <div className="text-xl font-outfit font-medium mt-4 mb-2">
          Description
        </div>
        <textarea
          // value={data.description}
          name="description"
          // onChange={handleTyping}
          className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none  placeholder:font-light placeholder:text-parts-gray-500 placeholder:font-outfit placeholder:font-regular"
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
          className="focus:outline-none w-full h-[15vh] border rounded-2xl px-4 py-3 resize-none placeholder:font-light placeholder:text-parts-gray-500 placeholder:font-outfit placeholder:font-regular"
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
