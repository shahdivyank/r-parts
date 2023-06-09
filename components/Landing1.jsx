import Landing from "../public/Landing.svg";
import Gear1 from "../public/Gear1.svg";
import Image from "next/image";
import ScrollArrow from "../public/ScrollArrow.svg";
import Link from "next/link";

const Landing1 = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-1/2 -translate-x-[20%] -translate-y-[25%]">
          <div className="flex flex-col items-start -space-y-16 ">
            <div className="font-outfit text-2xl">GIVE YOUR OLD PARTS</div>
            <div className="flex flex-col -space-y-16">
              <div className="font-bebasNeue text-rparts-orange text-landing">
                A NEW LIFE
              </div>
              <div className="font-outfit font-light w-8/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum convallis mi ut velit porttitor placerat. Nulla
                egestas mattis magna, ut luctus ligula mollis sit amet. Nam
                vitae leo dignissim, sollicitudin eros in, consequat neque.
                Suspendisse potenti. Quisque in est mauris. Nullam ut
                sollicitudin ligula.
              </div>
            </div>
          </div>
          <div className="mt-7 flex space-x-3">
            <Link
              href="/market"
              className="text-white bg-rparts-orange hover:bg-rparts-hoverOrange rounded-full py-2 px-12"
            >
              START SHOPPING
            </Link>
            {/* <button className="text-rparts-orange bg-white border-2 hover:bg-rparts-bannerGray border-rparts-orange rounded-full py-2 px-8">
              SELL PART
            </button> */}
          </div>
        </div>

        <Image
          src={Landing}
          alt="Landing"
          layout="responsive"
          className="mt-5"
        />

        <div className="absolute -right-[10%] -top-[3%] w-5/12">
          <Image
            src={Gear1}
            alt="Landing"
            layout="responsive"
            className="gearCW rounded-full"
          />
        </div>
        <div className="absolute right-[23%] top-[48%] w-3/12">
          <Image
            src={Gear1}
            alt="Landing"
            layout="responsive"
            className="gearCCW rounded-full"
          />
        </div>
        <div className="absolute -left-[23%] top-[4%] w-4/12">
          <Image
            src={Gear1}
            alt="Landing"
            layout="responsive"
            className="gearCW rounded-full"
          />
        </div>

        <div className="absolute flex flex-col bottom-0 text-rparts-borderGray">
          <Image
            src={ScrollArrow}
            alt="Landing"
            layout="responsive"
            className="animate-bounce"
          />
        </div>
      </div>
    </>
  );
};

export default Landing1;
