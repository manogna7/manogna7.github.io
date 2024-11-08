import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import IG from "../../assets/astro2.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const greetingText = "Hello World!";

  // Typing effect for the greeting text
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + greetingText[index]);
      index += 1;
      if (index === greetingText.length) clearInterval(typingInterval);
    }, 200); // Slightly slower typing effect for elegance

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <header>
      <div id="home" className="container header__container fade-in">
        <h4 className="typing-effect">{typedText}</h4>
        <h1 className="glow-text">I'm Manogna Challoju</h1>
        <h4 className="text-list">Currently pursuing my Master's in Computer Science at Oregon State University</h4>
        <CTA />
        <HeaderSocial />

        <div className="me parallax">
          <img src={IG} alt="me" />
        </div>

        <a href="#contact" className="scroll__down pulse">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
