import React from "react";

const Card = () => {
  return (
    <div className="bg-purple flex space-x-[42px] px-[64px] py-[48px] mt-[64px] mb-[32px]">
      <div className="flex-1">
        <span className="body-2 text-white/60 ">Working hours</span>
        <div className="h-[1px] bg-white/10 my-[16px]"></div>
        <h5 className="heading-5 text-white">Monday To Friday</h5>
        <h5 className="heading-5 text-white">9:00 AM to 8:00 PM</h5>
        <span className="body-1 text-white/60">
          Our Support Team is available 24/7
        </span>
      </div>
      <div className="flex-1">
        <span className="body-2 text-white/60 ">Contact Us</span>
        <div className="h-[1px] bg-white/10 my-[16px]"></div>
        <h5 className="heading-5 text-white">020 7993 2905</h5>
        <span className="body-1 text-white/60">hello@finsweet.com</span>
      </div>
    </div>
  );
};

export default Card;
