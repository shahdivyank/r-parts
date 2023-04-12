import Landing from "../public/Landing.svg";
import Image from "next/image";

export default function Home() {
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
            <button className="text-white bg-rparts-orange rounded-full py-2 px-12">
              START SHOPPING
            </button>
            <button className="text-rparts-orange bg-rparts-white border-2 border-rparts-orange rounded-full py-2 px-8">
              SELL PART
            </button>
          </div>
        </div>
        <Image src={Landing} alt="Landing" layout="responsive" />
      </div>
    </>
  );
}
