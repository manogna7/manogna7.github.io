import React from "react";
import "./header.css";
import CTA from "./CTA";
import IG from "../../assets/astro2.png";
import HeaderSocial from "./HeaderSocial";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello World!</h4>
        <Fade top>
          <h1>I'm Manogna Challoju</h1>
        </Fade>
        <h4 className="text-list">Currently pursuing my Master's in Computer Science at Oregon State University</h4>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <Fade bottom>
            <img src={IG} alt="me" />
          </Fade>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
