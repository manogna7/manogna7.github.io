import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiCoffee } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
              <small>3+ Years in the Industry</small>
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
            Bringing ideas to life — whether through code or brushstrokes — is
            what truly makes me feel alive. I got into development because
            computers have always fascinated me, and the magic they create by
            transforming simple commands into incredible outcomes. Every bug I
            come across and every skill I refine brings me closer to that sense
            of wonder. I strive to bring creativity and technology together to
            create something that will outlive me and leave a lasting impact.
            <br />
            With almost three years of experience, I’ve had the privilege of
            working with clients across the globe, delivering innovative
            solutions and driving impactful results. I thrive in dynamic
            environments, always eager to learn, grow, and tackle new
            challenges head-on.
            <br />
            Thank you for stopping by! Feel free to reach out — I’d love to
            connect and know about you. :)
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
