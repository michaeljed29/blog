import React from "react";

const HeroText = () => {
  return (
    <div className="relative top-[-55px]">
      <div className="text-white text-sm[16px] tracking-[3px] font-inter font-medium">
        POSTED ON <span className="font-inter font-black">STARTUP</span>
      </div>
      <h1 className="display">
        Step-by-step guide to choosing great font pairs
      </h1>
      <div className="text-white flex items-center h-[24px]">
        By <span className="text-yellow body-1 mx-[8px]">James West</span>
        <span className="mr-[8px] relative top-[-1px]">|</span> May 23, 2022
      </div>

      <p className="body-1 text-white max-w-[599px] mt-[16px] mb-[20px]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
    </div>
  );
};

export default HeroText;
