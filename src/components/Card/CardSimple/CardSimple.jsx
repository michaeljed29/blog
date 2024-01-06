import React from "react";

const CardSimple = ({ className, label, title, description }) => {
  return (
    <div className={`${className}`}>
      <span className="capital-1">{label}</span>
      <h2 className="heading-3 mt-[24px] mb-[16px] text-black">{title}</h2>
      <div className="body-1 text-mediumGray">{description}</div>
    </div>
  );
};

export default CardSimple;
