import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import Testimony from "./Testimony";
import Fade from "react-reveal/Fade";

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <div className="flex px-[112px] py-[80px] bg-lightYellow">
            <div className="flex-1">
              <Fade delay={500}>
                <span className="capital-1">Testimonial</span>
                <h2 className="heading-3 mt-[12px] mb-[16px]">
                  What people say about our blog
                </h2>
                <p className="body-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </Fade>
            </div>

            <Fade delay={800}>
              <div className="w-[1px] bg-[#d0d0d0] h-[full] mx-[90px]"></div>
            </Fade>

            <div className="flex-1">
              <Fade delay={1300}>
                <Testimony />
              </Fade>
            </div>
          </div>
        </Fade>
      </Container>
    </Section>
  );
};

export default Testimonials;
