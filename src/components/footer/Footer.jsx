import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/manognach/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/manogna7" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="manogna6864@gmail.com">
          <MdOutlineEmail />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          <em>
            This is still a work in progress - stay tuned for more updates!
          </em>
          <br></br>
          Last Updated 12 May, 2025
          <br></br>&copy; Manogna Challoju. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
