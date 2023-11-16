import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  const [mouseY, setMouseY] = useState(0);

  // Mouse tracking for pupil movement
  const handleMouseMove = (event) => {
    setMouseX(event.clientX / window.innerWidth - 0.5);
    setMouseY(event.clientY / window.innerHeight - 0.5);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [mouseX, setMouseX] = useState(0);

  return (
    <header>
      <div className="container header__container">
        <h1>Hi, I'm Manogna</h1>
        <p className="header__description">
          Currently pursuing my Master's in Computer Science at Oregon State University
        </p>
        <CTA />
        <HeaderSocial />
        <h3 className="header__tagline">Exploring the universe, one line of code at a time.</h3>

        {/* Space Helmet */}
        <div className="space-helmet">
          <div className="helmet-border"></div>
          <div className="ear left-ear"></div>
          <div className="ear right-ear"></div>
          <div className="cat-face">
            <div className="eye left-eye">
              <div
                className="pupil"
                style={{
                  transform: `translate(-50%, -50%) translate(${mouseX * 10}px, ${mouseY * 10}px)`,
                }}
              ></div>
            </div>
            <div className="eye right-eye">
              <div
                className="pupil"
                style={{
                  transform: `translate(-50%, -50%) translate(${mouseX * 10}px, ${mouseY * 10}px)`,
                }}
              ></div>
            </div>
            <div className="nose"></div>
            <svg
              className="mouth"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 30"
              width="50"
              height="30"
            >
              <path
                d="M25 0 Q25 10, 15 10 M25 0 Q25 10, 35 10"
                stroke="black"
                fill="transparent"
                strokeWidth="2"
              />
            </svg>
            <div className="mouth"></div>
            <div className="whiskers left-whiskers"></div>
            <div className="whiskers right-whiskers"></div>
          </div>
        </div>

        {/* Scroll Down Animation */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;