import React from "react";

const ButtonLink = ({ className = "", children }) => {
  return <div className={`link-button ${className}`}>{children}</div>;
};

export default ButtonLink;
