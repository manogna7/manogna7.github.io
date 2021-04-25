import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./2.png")} alt="" />
          </div>
          <center>
            <h3>Durity</h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./7.png")} alt="" />
          </div>
          <center>
            <h3>Cyborg</h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./1.png")} alt="" />
          </div>
          <center>
            <h3>Equalithon</h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./4.png")} alt="" />
          </div>
          <center>
            <h3>FebaTech </h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./3.png")} alt="" />
          </div>
          <center>
            <h3>IEEE SSC'19</h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./5.png")} alt="" />
          </div>
          <center>
            <h3>Artquisite</h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./5.png")} alt="" />
          </div>
          <center>
            <h3>ILS WIE Leadership Summit</h3>
          </center>
        </article>

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={require("./6.png")} alt="" />
          </div>
          <center>
            <h3>CRUD Employee POC</h3>
          </center>
        </article>
      </div>
    </section>
  );
};

export default Projects;
