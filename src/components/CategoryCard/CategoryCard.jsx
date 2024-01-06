import React from "react";

const CategoryCard = ({ className, imgSrc, title, description }) => {
  return (
    <div
      className={`border-solid border-[1px] border-lightGray p-[32px] ${className} cursor-pointer hover:bg-yellow transition-all`}
    >
      <div className="flex items-center justify-center bg-lightYellow h-[48px] w-[48px] rounded">
        <img src={imgSrc} />
      </div>
      <h3 className="heading-3 mb-[4px] mt-[16px]">{title}</h3>
      <p className="body-1 text-mediumGray">{description}</p>
    </div>
  );
};

export default CategoryCard;
