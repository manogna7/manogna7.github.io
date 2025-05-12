import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import { startBlobAnim } from "./blob-anim/meta";

const Header = () => {
  const headerText = "Hi, I’m Manogna Challoju";
  const descriptionText =
    "Software Engineer | Expertise in Web Dev, Cloud Tech and AI";

  const [headerIndex, setHeaderIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [headerTypedText, setHeaderTypedText] = useState("");
  const [descriptionTypedText, setDescriptionTypedText] = useState("");
  const canvasRef = useRef(null);

  // Init blob animation
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX / window.innerWidth - 0.5);
    setMouseY(event.clientY / window.innerHeight - 0.5);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      startBlobAnim(canvasRef.current);
    }
  }, []);
  // Typing animation for header
  useEffect(() => {
    if (headerIndex < headerText.length) {
      const timeout = setTimeout(() => {
        setHeaderTypedText((prev) => prev + headerText[headerIndex]);
        setHeaderIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [headerIndex]);

  // Typing animation for description
  useEffect(() => {
    if (
      headerIndex === headerText.length &&
      descriptionIndex < descriptionText.length
    ) {
      const timeout = setTimeout(() => {
        setDescriptionTypedText(
          (prev) => prev + descriptionText[descriptionIndex],
        );
        setDescriptionIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [descriptionIndex, headerIndex]);

  return (
    <header>
      <div className="load-img"></div>
      <canvas ref={canvasRef} className="blob-canvas" />
      <div className="container header__container">
        {/* Typing Animation for Header */}
        <h1 className="hero-heading">
          {headerTypedText}
          <span className="cursor">
            {headerIndex < headerText.length ? "|" : ""}
          </span>
        </h1>

        {/* Typing Animation for Description */}
        <p className="header__description">
          {descriptionTypedText}
          <span className="cursor">
            {descriptionIndex < descriptionText.length ? "|" : ""}
          </span>
        </p>

        <CTA />
        <HeaderSocial />

        <h3 className="header__tagline">
          Exploring the universe, one line of code at a time.
        </h3>
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
