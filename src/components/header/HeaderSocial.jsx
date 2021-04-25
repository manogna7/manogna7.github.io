import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/manognach/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/manogna7" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/artquisite/" target="_blank">
        <BsInstagram />
      </a>
      <a href="manogna6864@gmail.com">
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocial;
