import React from "react";
import NavItem from "./NavItem";

const Nav = ({ items = [] }) => {
  return (
    <ul className="nav flex mr-[20px]">
      {items.map((item) => (
        <NavItem link={item.link}>{item.label}</NavItem>
      ))}
    </ul>
  );
};

export default Nav;
