import React from "react";
import Container from "../../../../components/Container/Container";
import Date from "../../../../components/Date/Date";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary/ButtonPrimary";
import FeaturedImg from "../../../../assets/images/man-smiling.jpg";
import Fade from "react-reveal/Fade";

const FeaturedPost = () => {
  return (
    <section className="p-[80px] bg-lavender">
      <Container>
        <div className="flex">
          <div className="flex-1 mr-[140px]">
            <Fade>
              <div className="">
                <span className="capital-3">Featured Post</span>
                <h2 className="heading-2 mt-[20px] mb-[16px]">
                  Step-by-step guide to choosing great font pairs
                </h2>
                <Date name="John Doe" date="May 23, 2022" className="" />
                <p className="body-1 text-mediumGray mt-[16px] mb-[32px]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <ButtonPrimary>{`Read More >`}</ButtonPrimary>
              </div>
            </Fade>
          </div>
          <div className="flex-1">
            <Fade delay={300}>
              <img className="w-full" src={FeaturedImg} />
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPost;
