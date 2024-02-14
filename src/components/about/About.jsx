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
        <div className="about__me">
          <div className="about__me-image">
            <img src={require("./profile.jpg")} alt="pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__name" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__name" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__name" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
            <article className="about__card">
              <FiCoffee className="about__name" />
              <h5>Coffee</h5>
              <small>200+ Drinks</small>
            </article>
          </div>

          <p align="justify">
            Hello there!
            <br />
            Turning imagination into reality through code or brushstrokes is
            what makes me feel alive. I got into development because computers
            have always fascinated me, and I am perpetually working on improving
            my skills one bug at a time. Just seeing code getting converted to
            things we regularly use, like a navigation or something as simple as
            a cursor click, these are no less than magic to me. I'm all about
            bringing creativity and tech together to create something that would
            outlive me.
            <br>
              I have almost 3 years of experience in the field of software
              development where I've had the opportunity to work with clients
              worldwide, delivering innovative solutions and driving impactful
              results. My roles have ranged from web development to research and
              advisory, allowing me to hone my skills in both front-end and
              back-end technologies. I've been part of projects that have
              improved user engagement, boosted communication efficiency, and
              streamlined processes. I thrive in dynamic environments and am
              always seeking opportunities to learn and grow.
            </br>
            <br />
            Thank you for stopping by and do reach out to me if you have
            something to talk about! :)
            <br />
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
