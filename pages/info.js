import InfoBanner from "../components/SVGs/InfoBanner";
import WhatIsRParts from "../components/WhatIsRParts";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

export default function Info() {
  return (
    <div className="bg-rparts-white flex justify-center items-center flex-col pt-0">
      <InfoBanner />

      <div className="flex justify-center items-center flex-col w-8/12">
        <WhatIsRParts />
        <HowItWorks />
        <FAQ />
      </div>
    </div>
  );
}
