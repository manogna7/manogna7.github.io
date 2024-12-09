import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  const [mouseX, setMouseX] = useState(0);
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

  return (
    <header>
      <div className="container header__container">
      <h1>Hi, I'm Manogna</h1>
        <h4 className="text-list">
          Currently pursuing my Master's in Computer Science at Oregon State University
        </h4>
        <CTA /> {/* Includes Download Resume and Bento Buttons */}
        <HeaderSocial /> {/* Social icons: LinkedIn, GitHub, etc. */}
        <p>Exploring the universe, one line of code at a time.</p>

        {/* Space Helmet */}
        <div className="space-helmet">
          <div className="helmet-border"></div>
          <div className="cat-face">
            <div className="ear left-ear"></div>
            <div className="ear right-ear"></div>
            <div className="eye left-eye">
              <div
                className="pupil"
                style={{
                  transform: `translate(-50%, -50%) translate(${mouseX * 10}px, ${
                    mouseY * 10
                  }px)`,
                }}
              ></div>
            </div>
            <div className="eye right-eye">
              <div
                className="pupil"
                style={{
                  transform: `translate(-50%, -50%) translate(${mouseX * 10}px, ${
                    mouseY * 10
                  }px)`,
                }}
              ></div>
            </div>
            <div className="nose"></div>
            <div className="mouth"></div>
            <div className="whiskers left-whiskers"></div>
            <div className="whiskers right-whiskers"></div>
          </div>
          <div className="cat-body"></div>
          {/* <div className="tail"></div> */}
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
