import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import { links } from "@/data/profile/Links";

const Data = ({ current }) => {
  return (
    <div className="w-full">
      <Navigation current={current ?? "orders"} />
      <Dashboard current={links[current]} />
    </div>
  );
};

export default Data;
