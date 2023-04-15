import You from "../public/You.svg";
import ACM from "../public/ACM.svg";
import Community from "../public/Community.svg";

import Image from "next/image";

const Landing2 = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-16 mx-64 my-24">
        <div className="bg-rparts-white w-1/3 h-1/2 p-12 rounded-3xl flex justify-center items-center flex-col">
          <div className="w-3/12 -mt-2 mb-2">
            <Image src={You} alt="Landing" layout="responsive" />
          </div>
          <div className="font-bebasNeue text-5xl mb-4">STEP ONE</div>
          <div className="font-light text-center mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis mi ut velit porttitor placerat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum convallis
          </div>
        </div>
        <div className="bg-rparts-white w-1/3 h-1/2 p-12 rounded-3xl flex justify-center items-center flex-col">
          <div className="w-3/12 -mt-2 mb-2">
            <Image src={ACM} alt="Landing" layout="responsive" />
          </div>
          <div className="font-bebasNeue text-5xl mb-4">STEP TWO</div>
          <div className="font-light text-center mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis mi ut velit porttitor placerat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum convallis
          </div>
        </div>
        <div className="bg-rparts-white w-1/3 h-1/2 p-12 rounded-3xl flex justify-center items-center flex-col">
          <div className="w-4/12 -mt-2 mb-2">
            <Image src={Community} alt="Landing" layout="responsive" />
          </div>
          <div className="font-bebasNeue text-5xl mb-4">STEP THREE</div>
          <div className="font-light text-center mx-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis mi ut velit porttitor placerat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum convallis
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing2;
