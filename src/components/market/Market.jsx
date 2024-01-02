import Header from "../Header";
import Filters from "./Filters";
import Items from "./Items";

const Market = () => {
  return (
    <div className="w-11/12">
      <Header title="MARKET" />
      <div className="flex mt-8 h-screen gap-2">
        <Filters />
        <Items />
      </div>
    </div>
  );
};

export default Market;
