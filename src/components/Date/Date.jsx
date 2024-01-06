import React from "react";

const Date = ({ className = "", name = "", date = "" }) => {
  return (
    <div className={`label-1 ${className}`}>
      By <span className={`text-purple mr-[8px] ${className}`}>{name}</span>
      <span className="mr-[8px] relative top-[-1px]">|</span>
      {date}
    </div>
  );
};

export default Date;
