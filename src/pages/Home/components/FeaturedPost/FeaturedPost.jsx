import React from "react";
import FeaturedImg from "../../../../assets/images/featured.png";
import Date from "../../../../components/Date/Date";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary/ButtonPrimary";

const FeaturedPost = () => {
  return (
    <div className="flex-1 mr-[32px]">
      <h2 className="heading-2 mb-[32px]">Featured Post</h2>

      <div className="p-[32px] border-solid border-[1px] border-gray">
        <img className="w-full max-w-[100%]" src={FeaturedImg} />
        <Date
          name="John Doe"
          date="May 23, 2022"
          className="mt-[32px] mb-[16px]"
        />

        <h3 className="heading-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h3>

        <p className="body-1 text-mediumGray mt-[16px] mb-[32px]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>

        <ButtonPrimary>{`Read More >`}</ButtonPrimary>
      </div>
    </div>
  );
};

export default FeaturedPost;
