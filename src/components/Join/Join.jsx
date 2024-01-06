import React from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import Fade from "react-reveal/Fade";

const Join = () => {
  return (
    <Section className="mb-[64px]">
      <Container>
        <Fade>
          <div className="flex flex-col items-center">
            <h2 className="heading-2 max-w-[414px] text-center">
              Join our team to be a part of our story
            </h2>
            <p className="body-1 max-w-[414px] text-mediumGray mt-[16px] mb-[32px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <ButtonPrimary>Join Now</ButtonPrimary>
          </div>
        </Fade>
      </Container>
    </Section>
  );
};

export default Join;
