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
              <small>2 Years</small>
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
            Turning imagination to reality through code or brushstrokes is what
            sets my soul on fire. I got into development because computers have
            always fascinated me and I am perpetually working on improving my
            skills one bug at a time. Just seeing code getting converted to
            things we regularly use, like a web search or something as simple as
            cursor click, these are no less than magic to me. I'm all about
            bringing creativity and tech together to make something unique.
            Right now, I'm just setting off on this thrilling journey and
            striving to create something that would outlive me.
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
