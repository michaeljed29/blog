import React from "react";

const ButtonPrimary = ({ className = "", children }) => {
  return (
    <a className={`primary-button ${className} inline-flex justify-center`}>
      {children}
    </a>
  );
};

export default ButtonPrimary;
