import Landing4SVG from "../public/Landing4.svg";
import Image from "next/image";

const Landing4 = () => {
  return (
    <>
      <div>
        <div className="relative mx-64 flex flex-col space-y-10 mb-20">
          <div className="flex justify-between bg-rparts-wrapperGray p-5 rounded-3xl">
            <div>
              <div className="font-bebasNeue text-7xl">SUSTAINABILITY</div>
              <div className="font-outfit font-light w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum convallis mi ut velit porttitor placerat. Nulla
                egestas magna.
              </div>
            </div>
            <div className="flex items-end flex-col">
              <div className="font-bebasNeue text-7xl">COMMUNITY</div>
              <div className="font-outfit font-light text-right w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum convallis mi ut velit porttitor placerat. Nulla
                egestas magna.
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-rparts-wrapperGray p-5 rounded-3xl">
            <div>
              <div className="font-bebasNeue text-7xl">INNOVATION</div>
              <div className="font-outfit font-light w-1/2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum convallis mi ut velit porttitor placerat. Nulla
                egestas magna.
              </div>
            </div>
            <div className="flex items-end flex-col">
              <div className="font-bebasNeue text-7xl">GROWTH</div>
              <div className="font-outfit font-light text-right w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum convallis mi ut velit porttitor placerat. Nulla
                egestas magna.
              </div>
            </div>
            <div className="absolute w-1/2 left-[25%] -top-[10%]">
              <Image
                src={Landing4SVG}
                alt="Landing"
                layout="responsive"
                className="gearCCW"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing4;
