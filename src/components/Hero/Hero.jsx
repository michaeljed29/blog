import React from "react";
import HeroText from "./HeroText";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import Container from "../Container/Container";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero flex items-center padding">
      <Container>
        <Fade>
          <HeroText />
          <ButtonPrimary>{`Read More >`}</ButtonPrimary>
        </Fade>
      </Container>
    </div>
  );
};

export default Hero;
