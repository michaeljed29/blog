import React from "react";
import ProfilePicture from "../../../../assets/images/profile-picture.jpeg";
import ArrowLeft from "../../../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../../../assets/svg/ArrowRight.svg";

const Testimony = () => {
  return (
    <div className="">
      <h4 className="heading-4 mb-[120px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h4>
      <div className="flex justify-between items-center">
        <div className="flex flex-1">
          <img
            className="rounded-full w-[48px] h-[48px] mr-[16px]"
            src={ProfilePicture}
          />
          <div>
            <h4 className="heading-4">Jonathan Vallem</h4>
            <span className="body-1 text-mediumGray">New york, USA</span>
          </div>
        </div>
        <div className="flex items-center space-x-[24px]">
          <div className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full cursor-pointer">
            <img src={ArrowLeft} />
          </div>

          <div className="flex items-center justify-center w-[62px] h-[62px] bg-black rounded-full cursor-pointer">
            <img src={ArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
