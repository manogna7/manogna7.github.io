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
      "DevEase is a cutting-edge web development tool designed to simplify the process of building and deploying websites. It leverages the power of AI to automate repetitive coding tasks, making development faster and more efficient. With features like an intuitive drag-and-drop interface, customizable designs, and support for multiple programming languages and frameworks, DevEase caters to developers of all skill levels. The tool is built on a robust tech stack that includes React.js, Node.js, MongoDB, and advanced AI models like GPT-4 APIs, ensuring a seamless development experience. DevEase empowers developers to focus on creativity and innovation while handling the complexities of coding and workflow automation.",
    technologies: ["JavaScript", "Node.js", "React", "NLP"],
    link: "https://github.com/manogna7/DevEase",
    image: require("./devease.png"),
  },
  {
    id: 2,
    title: "LLM-VM",
    description:
      "Contributed to a project utilizing LLM-VM, an open-source virtual machine for large language models developed by @anarchy-ai. The project showcased how LLM-VM's features, such as task optimization, persistent memory, and support for multiple LLMs, can be used to build AI-driven applications. My work included integrating DevEase's API for coming up with innovative use cases to develop a scalable and efficient solution for AI optimization, batch processing.",
    technologies: ["Python", "AI Optimization", "Batch Processing"],
    link: "https://github.com/manogna7/LLM-VM",
    image: require("./llm-vm.png"),
  },
  {
    id: 3,
    title: "Decision-Making (Reinforcement Learning)",
    description:
      "This project focuses on exploring decision-making algorithms in reinforcement learning by implementing various techniques across different environments like Deep Q Networks (DQN) for Atari games, Twin Delayed Deep Deterministic Policy Gradient (TD3) and Proximal Policy Optimization (PPO) for the HalfCheetah simulation, and Markov Decision Processes (MDP) for a maze environment. It also shows the use of value iteration and policy iteration to solve MDPs efficiently.",
    technologies: ["Python", "Reinforcement Learning", "OpenAI Gym"],
    link: "https://github.com/manogna7/Decision-Making",
    image: require("./1.png"),
  },
/*   {
    id: 4,
    title: "AI534-Machine Learning",
    description:
      "Developed Jupyter Notebooks exploring core ML techniques, feature selection, and hyperparameter tuning.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    link: "https://github.com/ai534-machine-learning",
    image: require("./7.png"),
  }, */
  {
    id: 5,
    title: "ShopEase",
    description:
      "This is an e-commerce product management system designed to simplify product management and enhance the shopping experience, it enables administrators to efficiently manage products and categories while offering users an intuitive interface for searching and browsing. One of its standout features is Shopping Insights which provides users with detailed information about the sustainability and ethical impact of products, catering to the growing demand for conscious consumerism. Some features include a RESTful API for seamless data management, secure user authentication, and smooth pagination for product listings.",
    technologies: ["E-commerce", "Shopping Insights", "Django", "UX/UI"],
    link: "https://github.com/manogna7/ShopEase",
    image: require("./7.png"),
  },
  {
    id: 6,
    title: "Tarpaulin API",
    description:
      "Built an application to manage courses, assignments, and submissions, featuring user authentication, AWS S3 uploads, and task handling with RabbitMQ. Fully containerized using Docker and deployed on Google Cloud.",
    technologies: ["JavaScript", "REST APIs", "Cloud Deployment"],
    link: "https://github.com/manogna7/tarpaulin-api",
    image: require("./7.png"),
  },
  {
    id: 7,
    title: "artquisite",
    description:
      "Created a dynamic website to display a personal art collection using JavaScript, HTML, and CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/manogna7/artquisite",
    //link: "https://artquisite.netlify.app/",
    image: require("./artquisite.png"),
  },
  {
    id: 8,
    title: "Durity",
    description:
      "Developed a digital vault for storing and organizing WILL-related data, reducing data retrieval time by 40 %. Implemented a JSON to PDF conversion module, streamlining data documentation and sharing processes",
    technologies: ["TypeScript", "JavaScript", "React"],
    link: "https://github.com/highlightio",
    image: require("./durity.png"),
  },
  {
    id: 9,
    title: "Graphics & Shaders",
    description:
      "Designed and developed a personal portfolio website to showcase projects and skills.",
    technologies: ["OpenGL", "C++", "CSS"],
    link: "https://github.com/manogna7/Computer-Graphics-Shaders",
    image: require("./7.png"),
  },
  {
    id: 10,
    title: "IEEE - WIE Leadership Summit",
    description:
      "Developed and maintained a website for ILS'20 to facilitate registration and submission of ideas from participants.",
    technologies: ["React", "JavaScript", "CSS"],
    image: require("./ils.png"),
  },
  {
    id: 11,
    title: "IEEE Covid Move",
    description:
      "Developed a website for IEEE Hyderabad Section's initiative, IEEE COVID Move, within 48 hours of reporting first COVID case in Hyderabad. The website featured a section specifically for showcasing team projects, where individuals contributed ideas to address challenges faced during COVID-19",
    technologies: ["React", "JavaScript", "CSS"],
    image: require("./ils.png"),
  },
  {
    id: 12,
    title: "IEEE SSC'19",
    description:
      "Developed and maintained a website for Section Student Congress'19 to facilitate registration and submission of ideas from participants. Analyzed all Student Branches in Hyderabad Section and generated a report to revive inactive ones.",
    technologies: ["React", "JavaScript", "CSS"],
    image: require("./ssc.png"),
  }
];


const Projects = () => {
  const [modalProject, setModalProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalProject(null);
      setIsClosing(false);
    }, 300);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
      <h2>Projects</h2>
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
        <div
          className={`modal-overlay ${isClosing ? "closing" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${isClosing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={closeModal}
              aria-label="Close Modal"
            >
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
