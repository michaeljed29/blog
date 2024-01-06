import React from "react";

import FacebookIcon from "../../assets/svg/Facebook.jsx";
import TwitterIcon from "../../assets/svg/Twitter.jsx";
import InstagramIcon from "../../assets/svg/Instagram.jsx";
import LinkedinIcon from "../../assets/svg/Linkedin.jsx";
import colors from "../../styles/colors.js";

const SocialMedia = () => {
  return (
    <div className="flex space-x-[16px] mt-[20px]">
      <FacebookIcon color={colors.black} />
      <TwitterIcon color={colors.black} />
      <InstagramIcon color={colors.black} />
      <LinkedinIcon color={colors.black} />
    </div>
  );
};

export default SocialMedia;
