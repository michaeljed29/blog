import React from "react";
import Container from "../../../../components/Container/Container";
import Header from "./Header";
import Cover from "./Cover";
import CardSimple from "../../../../components/Card/CardSimple/CardSimple";
import Fade from "react-reveal/Fade";

const Overview = () => {
  return (
    <section className="mt-[80px] pb-[64px]">
      <Container>
        <Header />
        <div className="mt-[-60px]">
          <Fade>
            <Cover />
          </Fade>
          <div className="bg-lavender py-[64px] px-[108px] pt-[128px] flex space-x-[32px]">
            <Fade>
              <div className="flex-1">
                <CardSimple
                  label="Our Mission"
                  title="Creating valuable content for creatives all around the world"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus."
                />
              </div>
              <div className="flex-1">
                <CardSimple
                  label="Our Vision"
                  title="A platform that empowers individuals to improve"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus."
                />
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Overview;
