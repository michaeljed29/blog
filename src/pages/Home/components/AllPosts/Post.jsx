import React from "react";
import Date from "../../../../components/Date/Date.jsx";

const Post = ({ className }) => {
  return (
    <div
      className={`p-[32px] ${className} cursor-pointer hover:bg-lightYellow transition-color duration-300`}
    >
      <Date name="John Doe" date="Aug 23, 2021" />
      <div className="heading-4 mt-[8px]">
        8 Figma design systems that you can download for free today.
      </div>
    </div>
  );
};

export default Post;
