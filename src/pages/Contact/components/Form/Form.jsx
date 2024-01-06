import React from "react";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary/ButtonPrimary";

const Form = () => {
  return (
    <div className="">
      <form>
        <input
          className="w-full border-mediumGray/50 border-solid border-[1px] p-[24px] outline-none text-black placeholder:text-black mb-[16px]"
          placeholder="Full Name"
        />
        <input
          className="w-full border-mediumGray/50 border-solid border-[1px] p-[24px] outline-none text-black placeholder:text-black mb-[16px]"
          placeholder="Your Email"
        />
        <textarea
          className="w-full border-mediumGray/50 border-solid border-[1px] p-[24px] outline-none text-black placeholder:text-black h-[144px] mb-[16px] resize-none"
          placeholder="Message"
        />
        <ButtonPrimary className="w-full">Send Message</ButtonPrimary>
      </form>
    </div>
  );
};

export default Form;
