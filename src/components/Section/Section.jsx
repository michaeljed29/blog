import React from "react";

const Section = ({ className, children }) => {
  return <section className={`padding-y ${className}`}>{children}</section>;
};

export default Section;
