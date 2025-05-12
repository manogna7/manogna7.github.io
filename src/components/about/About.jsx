import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiCoffee } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p className="section__subtitle">
        From ideas to execution - a quick look at my journey
      </p>

      <div className="container about__container">
        {/* Profile Image Section */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={require("./profile.jpg")} alt="Manogna Challoju" />
          </div>
        </div>

        {/* About Content Section */}
        <div className="about__content">
          {/* About Cards */}
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years in the Industry</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Global Reach</h5>
              <small>20+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Successful Deliveries</small>
            </article>
            <article className="about__card">
              <FiCoffee className="about__icon" />
              <h5>Code Fuel</h5>
              <small>Enough Coffee to Power a Startup ☕️</small>
            </article>
          </div>

          {/* About Text Section */}
          <p>
            I’ve always been someone who gets excited by possibility - whether
            it’s designing a new interface, debugging an edge case, or sketching
            at the end of the day. Code became my craft because it lets me build
            things that are thoughtful, useful, and possibly that will outlive
            me.
            <br />
            Over the past few years, I’ve worked across continents and codebases
            - from rebuilding legacy systems to developing AI tools that help
            people work smarter.
            <br />
            Thanks for stopping by! Feel free to reach out - I’d love to connect
            and hear your story. :)
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
