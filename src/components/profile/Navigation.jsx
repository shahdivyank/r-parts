const Navigation = ({ activeButton, setActiveButton }) => {
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex font-outfit space-x-2 pt-5">
      <button
        onClick={() => handleButtonClick("Orders")}
        className={`${
          activeButton === "Orders"
            ? "bg-parts-orange text-white"
            : "bg-transparent border border-gray-300 text-gray-400"
        }  px-4 py-3 mr-1 h-fit focus:outline-none rounded-lg border-2 duration-300 ease-in-out hover:bg-parts-orange hover:text-white`}
      >
        ORDERS
      </button>
      <button
        onClick={() => handleButtonClick("Listed Items")}
        className={`${
          activeButton === "Listed Items"
            ? "bg-parts-orange text-white"
            : "bg-transparent border-2 border-gray-300 text-gray-400"
        } px-4 py-3 mr-1 h-fit focus:outline-none flex-shrink-0 rounded-lg border-2 transition duration-300 ease-in-out hover:bg-parts-orange hover:text-white`}
      >
        LISTED ITEMS
      </button>
      <button
        onClick={() => handleButtonClick("Past Purchases")}
        className={`${
          activeButton === "Past Purchases"
            ? "bg-parts-orange text-white"
            : "bg-transparent border-2 border-gray-300 text-gray-400"
        }  px-4 py-3 mr-1 h-fit focus:outline-none flex-shrink-0 rounded-lg border-2 duration-300 ease-in-out hover:bg-parts-orange hover:text-white`}
      >
        PAST PURCHASES
      </button>
      <button
        onClick={() => handleButtonClick("Sold Items")}
        className={`${
          activeButton === "Sold Items"
            ? "bg-parts-orange text-white"
            : "bg-transparent border-2 border-gray-300 text-gray-400"
        }  px-4 py-3 h-fit focus:outline-none flex-shrink-0 rounded-lg border-2 duration-300 ease-in-out hover:bg-parts-orange hover:text-white`}
      >
        SOLD ITEMS
      </button>
    </div>
  );
};

export default Navigation;
