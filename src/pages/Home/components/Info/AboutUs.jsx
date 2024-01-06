import React from "react";
import ButtonLink from "../../../../components/Button/ButtonLink/ButtonLink";

const AboutUs = ({ className }) => {
  return (
    <div className={`${className}`}>
      <span className="capital-1">About Us</span>
      <h2 className="heading-2 mt-[24px] mb-[16px]">
        We are a community of content writers who share their learnings
      </h2>
      <div className="body-1 text-mediumGray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <ButtonLink className="mt-[16px]">{`Read More >`}</ButtonLink>
    </div>
  );
};

export default AboutUs;
