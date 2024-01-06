import React from "react";
import Fade from "react-reveal";

const Header = () => {
  return (
    <div className="pl-[109px] flex items-center relative z-10">
      <div className="p-[64px] bg-white">
        <Fade>
          <span className="capital-3 ">ABOUT US</span>
          <h1 className="heading-1 mt-[16px]">
            We are a team of content writers who share their learnings
          </h1>
        </Fade>
      </div>
      <Fade delay={3000}>
        <p className="body-1 ml-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Fade>
    </div>
  );
};

export default Header;
