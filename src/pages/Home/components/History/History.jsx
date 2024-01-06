import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import StartedImg from "../../../../../src/assets/images/started.jpg";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary/ButtonPrimary";
import Fade from "react-reveal/Fade";

const History = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <div className="relative">
            <div className="max-w-[949px]">
              <Fade delay={300}>
                <img className="w-full" src={StartedImg} />
              </Fade>
            </div>
            <div className="p-[80px] bg-white absolute bottom-0 right-0 max-w-[706px]">
              <Fade delay={800}>
                <span className="capital-1">Why we started</span>
                <h1 className="heading-1 mt-[24px] mb-[16px]">
                  It started out as a simple idea and evolved into our passion
                </h1>
                <p className="body-1 text-mediumGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <ButtonPrimary className="mt-[32px]">
                  {"Discover our story >"}
                </ButtonPrimary>
              </Fade>
            </div>
          </div>
        </Fade>
      </Container>
    </Section>
  );
};

export default History;
