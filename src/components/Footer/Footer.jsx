import React from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Nav from "../Header/Nav";
import Logo from "../Header/Logo";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import FacebookIcon from "../../assets/svg/Facebook.jsx";
import TwitterIcon from "../../assets/svg/Twitter.jsx";
import InstagramIcon from "../../assets/svg/Instagram.jsx";
import LinkedinIcon from "../../assets/svg/Linkedin.jsx";
import colors from "../../styles/colors.js";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Section className="footer-section bg-black">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center">
            <Nav
              items={[
                { label: "Home", link: "/" },
                { label: "Blog", link: "/blog" },
                { label: "About Us", link: "/about" },
                { label: "Contact Us", link: "/contact" },
                { label: "Privacy Policy" },
              ]}
            />
          </div>
        </div>

        <div className="p-[64px] bg-white/[0.05] mb-[48px] mt-[48px] flex">
          <div className="flex-1 mr-[64px] ">
            <h1 className="heading-2 text-white">
              Subscribe to our news letter to get latest updates and news
            </h1>
          </div>

          <div className="h-[56px] flex">
            <input
              className="mr-[24px] w-[323px] border-darkGray border-solid border-[1px] 
              bg-transparent py-[14px] px-[24px] body-1 color-darkGray outline-none text-mediumGray placeholder:text-mediumGray"
              placeholder="Enter Your Email"
            />
            <ButtonPrimary>Subscribe</ButtonPrimary>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="body-1 text-white/[0.70]">
              Finstreet 118 2561 Fintown
            </span>
            <span className="body-1 text-white/[0.70]">
              Hello@finsweet.com 020 7993 2905
            </span>
          </div>
          <div className="flex space-x-[26px]">
            <div className="cursor-pointer">
              <FacebookIcon color={colors.mediumGray} />
            </div>

            <div className="cursor-pointer">
              <TwitterIcon color={colors.mediumGray} />
            </div>
            <div className="cursor-pointer">
              <InstagramIcon color={colors.mediumGray} />
            </div>
            <div className="cursor-pointer">
              <LinkedinIcon color={colors.mediumGray} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
