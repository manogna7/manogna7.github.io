import React, { useState } from 'react';
import './projects.css';

const projects = [
  {
    title: "Equalithon & Team Selection",
    description: "Equalithon, International Women's Day 2021",
    image: require('./1.png'),
  },
  {
    title: "Assets and Distribution",
    description: "Asset distribution system allowing seamless beneficiary management.",
    image: require('./2.png'),
  },
  {
    title: "IEEE Section Student Congress",
    description: "Website for IEEE Hyderabad Section Student Congress 2019.",
    image: require('./3.png'),
  },
  {
    title: "Automated Web App Deployment",
    description: "Deployment of web apps using NetApp Cloud Volume ONTAP.",
    image: require('./4.png'),
  },
  {
    title: "Artquisite",
    description: "Art portfolio website with a unique visual layout.",
    image: require('./5.png'),
  },
  {
    title: "Employee Directory",
    description: "A directory for employee management with intuitive UI.",
    image: require('./6.png'),
  },
  {
    title: "Cyborg Website Builder",
    description: "AI-powered tool to assist users in building websites.",
    image: require('./7.png'),
  },
  {
    title: "IEEE Women in Engineering",
    description: "Website for IEEE Women in Engineering International Leadership Summit.",
    image: require('./8.png'),
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="projects__container">
      <h2>Projects</h2>
      <div className="masonry-grid">
        {projects.map((project, index) => (
          <div key={index} className="masonry-item" onClick={() => openModal(project.image)}>
            <div className="masonry-content">
              <img src={project.image.default || project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="project-link">View Project</button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage.default || selectedImage} alt="Expanded view" className="modal-image" />
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
