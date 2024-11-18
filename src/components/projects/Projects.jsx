import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "DevEase",
    description:
      "Built DevEase, a web development automation tool designed to simplify code and app generation using AI.",
    technologies: ["JavaScript", "Node.js", "React", "Express", "AI"],
    link: "https://github.com/devease",
    image: require("./7.png"),
  },
  {
    id: 2,
    title: "LLM-VM",
    description:
      "Contributed to an open-source platform for running large language models locally with advanced optimization techniques.",
    technologies: ["Python", "AI Optimization", "Batch Processing"],
    link: "https://github.com/llm-vm",
    image: require("./7.png"),
  },
  {
    id: 3,
    title: "Decision-Making (Reinforcement Learning)",
    description:
      "Implemented RL algorithms for environments like Atari games and HalfCheetah to showcase advanced AI techniques.",
    technologies: ["Python", "Reinforcement Learning", "OpenAI Gym"],
    link: "https://github.com/decision-making",
    image: require("./7.png"),
  },
  {
    id: 4,
    title: "AI534-Machine Learning",
    description:
      "Developed Jupyter Notebooks exploring core ML techniques, feature selection, and hyperparameter tuning.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    link: "https://github.com/ai534-machine-learning",
    image: require("./7.png"),
  },
  {
    id: 5,
    title: "ShopEase",
    description:
      "Developed an e-commerce website using Python with a focus on performance, security, and payment integration.",
    technologies: ["Python", "Flask", "Django", "SQL", "UX/UI"],
    link: "https://github.com/shopease",
    image: require("./7.png"),
  },
  {
    id: 6,
    title: "Cloud and API Assignments",
    description:
      "Completed a series of assignments focusing on backend and cloud application development, including RESTful APIs and cloud deployment.",
    technologies: ["JavaScript", "REST APIs", "Cloud Deployment"],
    link: "https://github.com/cloud-api",
    image: require("./7.png"),
  },
  {
    id: 7,
    title: "artquisite",
    description:
      "Created a dynamic website to display a personal art collection using JavaScript, HTML, and CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/artquisite",
    image: require("./5.png"),
  },
  {
    id: 8,
    title: "highlight.io (Open Source Contribution)",
    description:
      "Contributed to an open-source full-stack monitoring platform to enhance debugging features and improve code efficiency.",
    technologies: ["TypeScript", "JavaScript", "React"],
    link: "https://github.com/highlightio",
    image: require("./7.png"),
  },
];

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="projects__container">
      <h2>My Projects</h2>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="slider-item">
            <div className="project-card" onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="modal-image"
            />
            <h2>{modalProject.title}</h2>
            <p>{modalProject.description}</p>
            <div className="modal-tech">
              <h4>Technologies Used:</h4>
              <div className="tech-buttons">
                {modalProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-button">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={modalProject.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
