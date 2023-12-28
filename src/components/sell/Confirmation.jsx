"use client";
import Button from "../Button";

const Confirmation = ({ text }) => {
  const handleContinue = () => console.log("Continue Shopping");

  const handleProfile = () => console.log("View Profile");

  return (
    <div className="rounded-2xl bg-parts-gray-100 flex flex-col items-center justify-center p-8 font-outfit text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black my-3">
        Your Part Has Been
        <span className="text-parts-orange mx-2">Successfully</span>Listed!
      </div>
      <div className="text-sm md:text-base w-9/12 text-3/4 lg:w-1/2 font-normal mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        convallis mi ut velit porttitor placerat. Nulla
        <span className="font-bold m-1">{text}</span>, ut luctus ligula mollis
        sit amet. Nam vitae leo dignissim, sollicitudin eros in, consequ
      </div>
      <div className="flex flex-col md:flex-row gap-3 mb-3">
        <Button
          text="CONTINUE SHOPPING"
          color="bg-orange"
          rounded="full"
          size="xl"
          onClick={handleContinue}
        />
        <Button
          text="VIEW PROFILE"
          color="border-orange"
          rounded="full"
          size="xl"
          onClick={handleProfile}
        />
      </div>
    </div>
  );
};

export default Confirmation;
