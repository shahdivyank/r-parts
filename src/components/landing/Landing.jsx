import Home from "./Home";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Values from "./Values";
import Works from "./Works";

const Landing = () => {
  return (
    <div className=" flex items-center flex-col">
      <Home />
      <Banner />
      <Works />
      <Reviews />
      <Values />
    </div>
  );
};

export default Landing;
