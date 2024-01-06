import React from "react";
import Section from "../../../../components/Section/Section";
import Container from "../../../../components/Container/Container";
import HandsImg from "../../../../assets/images/hands.jpg";
import PersonTalking from "../../../../assets/images/person-talking.jpg";
import Fade from "react-reveal/Fade";

const DisplayOne = () => {
  return (
    <div className="bg-yellow w-[102px] h-[116px] absolute top-[114px] left-[-56px] rounded-tl-[50px]"></div>
  );
};

const DisplayTwo = () => {
  return (
    <div className="bg-purple w-[74px] h-[74px] absolute bottom-[-37px] left-[107px] rounded-full"></div>
  );
};

const Info = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="flex space-x-[64px] items-center">
            <div className="flex-1">
              <Fade>
                <div className="max-w-[520px]">
                  <h2 className="heading-2">Our team of creatives</h2>
                  <h4 className="heading-4 my-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </h4>
                  <p className="body-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="flex-1">
              <Fade delay={300}>
                <div className="relative">
                  <img src={HandsImg} />
                  <DisplayOne />
                </div>
              </Fade>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex space-x-[64px] items-center flex-row-reverse space-x-reverse">
            <div className="flex-1">
              <Fade delay={300}>
                <div className="max-w-[535px]">
                  <h2 className="heading-2">Why we started this Blog</h2>
                  <h4 className="heading-4 my-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </h4>
                  <p className="body-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="flex-1">
              <Fade>
                <div className="relative">
                  <img src={PersonTalking} />
                  <DisplayTwo />
                </div>
              </Fade>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Info;
