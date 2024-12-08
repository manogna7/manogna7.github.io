import React, { useEffect, useRef, useState } from "react";
import "./header.css"; // Import the updated CSS file

const Header = () => {
  const [isBlinking, setIsBlinking] = useState(true); // State for blinking or mouse movement
  const catRef = useRef(null);

  useEffect(() => {
    const catFace = catRef.current.querySelector(".cat-face");

    const handleMouseEnter = () => {
      setIsBlinking(true); // Enable blinking when mouse enters
    };

    const handleMouseLeave = () => {
      setIsBlinking(false); // Enable mouse tracking when mouse leaves
    };

    catFace.addEventListener("mouseenter", handleMouseEnter);
    catFace.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      catFace.removeEventListener("mouseenter", handleMouseEnter);
      catFace.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Pupil movement based on cursor position (only if not blinking)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isBlinking) {
        const eyes = document.querySelectorAll(".pupil");
        const rect = catRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxOffsetX = 8;
        const maxOffsetY = 8;

        const offsetX = Math.min(Math.max((mouseX - centerX) / 15, -maxOffsetX), maxOffsetX);
        const offsetY = Math.min(Math.max((mouseY - centerY) / 15, -maxOffsetY), maxOffsetY);

        eyes.forEach((pupil) => {
          pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
      }
    };

    if (!isBlinking) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isBlinking]);

  return (
    <header>
      <div className="header__container" ref={catRef}>
        {/* Title */}
        <h1>Hi, I'm Manogna</h1>
        <h2>Creative Developer | Tech Enthusiast</h2>
        <p>Exploring the universe, one line of code at a time.</p>

        {/* Cat Animation */}
        <div className="space-helmet">
          <div className="helmet-border"></div>
          <div className="cat-face">
            {/* Ears */}
            <div className="ear left-ear"></div>
            <div className="ear right-ear"></div>
            {/* Eyes */}
            <div className="eye left-eye">
              <div className={`pupil ${isBlinking ? "blinking" : ""}`}></div>
            </div>
            <div className="eye right-eye">
              <div className={`pupil ${isBlinking ? "blinking" : ""}`}></div>
            </div>
            {/* Nose */}
            <div className="nose"></div>
            {/* Mouth */}
            <div className="mouth"></div>
            {/* Whiskers */}
            <div className="whiskers left-whiskers"></div>
            <div className="whiskers right-whiskers"></div>
          </div>
          {/* Body and Tail */}
          <div className="cat-body"></div>
          <div className="tail"></div>
        </div>

        {/* Scroll Down */}
        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
