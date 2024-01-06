import React from "react";
import CoverImg from "../../../../assets/images/about-cover.jpg";
import Display from "./Display";
import Fade from "react-reveal/Fade";

const Cover = () => {
  return (
    <div className="relative z-0">
      <img className="block" src={CoverImg} />
      <div className="absolute bottom-0 ml-[109px]">
        <div className="bg-yellow px-[48px] py-[32px] inline-flex space-x-[68px]">
          <div className="flex flex-col">
            <Fade delay={300}>
              <span className="display text-black my-0">12+</span>
              <span className="body-1">Blogs Published</span>
            </Fade>
          </div>
          <div className="flex flex-col">
            <Fade delay={600}>
              <span className="display text-black my-0">18k+</span>
              <span className="body-1">Views on Finsweet</span>
            </Fade>
          </div>
          <div className="flex flex-col">
            <Fade delay={900}>
              <span className="display text-black my-0">30k+</span>
              <span className="body-1">Total active Users</span>
            </Fade>
          </div>
        </div>
        <Display />
      </div>
    </div>
  );
};

export default Cover;
