import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { FaTools, FaUserGraduate } from "react-icons/fa";
import { RiStarLine } from "react-icons/ri";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("#home");

  // Scroll listener to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset to activate earlier
        const sectionHeight = section.offsetHeight;
        const sectionId = `#${section.getAttribute("id")}`;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a href="#home" aria-label="Home" className={activeSection === "#home" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" aria-label="About" className={activeSection === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" aria-label="Experience" className={activeSection === "#experience" ? "active" : ""}>
        <AiOutlineBook />
      </a>
      <a href="#projects" aria-label="Projects" className={activeSection === "#projects" ? "active" : ""}>
        <FaTools />
      </a>
      <a href="#activities" aria-label="Student Activities" className={activeSection === "#activities" ? "active" : ""}>
        <FaUserGraduate />
      </a>
      <a href="#testimonials" aria-label="Testimonials" className={activeSection === "#testimonials" ? "active" : ""}>
        <RiStarLine />
      </a>

      <a href="#contact" aria-label="Contact" className={activeSection === "#contact" ? "active" : ""}>
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default Nav;
