import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import LogoFeatured1 from "../../../../assets/svg/LogoFeatured1.svg";
import LogoFeatured2 from "../../../../assets/svg/LogoFeatured2.svg";
import LogoFeatured3 from "../../../../assets/svg/LogoFeatured3.svg";
import LogoFeatured4 from "../../../../assets/svg/LogoFeatured4.svg";
import LogoFeatured5 from "../../../../assets/svg/LogoFeatured5.svg";
import Fade from "react-reveal/Fade";

const Featured = () => {
  return (
    <Section>
      <Container>
        <Fade>
          <div className="flex items-center">
            <div>
              <Fade delay={300}>
                <div className="flex flex-col mr-[86px]">
                  <span className="body-2">We are</span>
                  <span className="heading-4 text-mediumGray">Featured in</span>
                </div>
              </Fade>
            </div>
            <div className="flex justify-between flex-1">
              <Fade delay={600}>
                <img src={LogoFeatured1} />
              </Fade>
              <Fade delay={900}>
                <img src={LogoFeatured2} />
              </Fade>
              <Fade delay={1200}>
                <img src={LogoFeatured3} />
              </Fade>
              <Fade delay={1500}>
                <img src={LogoFeatured4} />
              </Fade>
              <Fade delay={1800}>
                <img src={LogoFeatured5} />
              </Fade>
            </div>
          </div>
        </Fade>
      </Container>
    </Section>
  );
};

export default Featured;
