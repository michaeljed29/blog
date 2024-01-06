import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import Display from "./Display";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import Fade from "react-reveal/Fade";

const Info = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <Display />
          <div className="px-[80px] py-[96px] bg-lavender flex ">
            <div className="mr-[61px] flex-1">
              <Fade delay={500}>
                <AboutUs />
              </Fade>
            </div>

            {/* <Fade delay={1000}> */}
            <div className="flex-1">
              <Fade delay={1000}>
                <OurMission />
              </Fade>
            </div>

            {/* </Fade> */}
          </div>
        </Fade>
      </Container>
    </Section>
  );
};

export default Info;
