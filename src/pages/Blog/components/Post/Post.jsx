import React from "react";

const Post = ({ imgSrc, label, title, description }) => {
  return (
    <div className="flex items-center mb-[64px]">
      <img src={imgSrc} />
      <div className="ml-[32px]">
        <span className="capital-1 text-purple">{label}</span>
        <h2 className="heading-2 mt-[20px] mb-[16px]">{title}</h2>
        <p className="text-mediumGray">{description}</p>
      </div>
    </div>
  );
};

export default Post;
