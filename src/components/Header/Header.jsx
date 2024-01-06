import React from "react";
import Logo from "./Logo";
import Padding from "../Padding/Padding";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import Nav from "./Nav";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="h-20 bg-black">
      <Container>
        <div className="flex h-20 justify-between items-center">
          <Logo />
          <div className="flex items-center">
            <Nav
              items={[
                { label: "Home", link: "/" },
                { label: "Blog", link: "/blog" },
                { label: "About Us", link: "/about" },
                { label: "Contact Us", link: "/contact" },
              ]}
            />
            <ButtonPrimary className="text-black bg-white hover:bg-yellow transition-all">
              Subscribe
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
