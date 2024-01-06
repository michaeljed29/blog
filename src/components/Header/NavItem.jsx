import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ children, link = "/" }) => {
  return (
    <li className="body-1 text-white font-normal ">
      <Link
        className="cursor-pointer px-[12px] py-[12px] hover:text-yellow transition-colors duration-300"
        to={link}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
