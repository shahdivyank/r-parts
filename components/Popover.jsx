import React from "react";
import { createPopper } from "@popperjs/core";

const Popover = () => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "left",
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className=" text-rparts-subheadingGray font-light font-outfit border rounded-full border-rparts-subheadingGray uppercase text-sm px-2 py-0.5 mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            ?
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div className="bg-red-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blue-100 uppercase rounded-t-lg">
                blueGray popover title
              </div>
              –
              <div className="text-black p-3">
                And heres some amazing content. Its very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popover;
