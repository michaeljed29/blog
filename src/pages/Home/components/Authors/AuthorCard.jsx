import React from "react";
import SocialMedia from "./SocialMedia";

const AuthorCard = ({ img, name, title }) => {
  return (
    <div className="flex flex-col items-center p-[40px] bg-lightGray cursor-pointer hover:bg-lightYellow">
      <img className="w-[128px] rounded-full mb-[20px]" src={img} />
      <h3 className="heading-3">{name}</h3>
      <span className="body-2">{title}</span>
      <SocialMedia />
    </div>
  );
};

export default AuthorCard;
