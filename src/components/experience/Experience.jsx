import React, { useState, useEffect } from "react";
import "./experience.css";

function Experience() {
  // State to control which job details are displayed
  const [activeTab, setActiveTab] = useState("osu");
  const [showContent, setShowContent] = useState(true);

  // Chronological job data from most recent to oldest
  const jobs = {
    osu: {
      title: "Web Developer – Extension Service @ Oregon State University",
      dates: "Sep. 2023 – Present",
      description: [
        "Rebuilt, migrated the codebase from Drupal 8 to 10, and designing 20+ reusable PHP components, accelerating content creation by 30%.",
        "Led web content optimization efforts including formatting checks, error correction, and broken link resolution using Monsido, resulting in a 20% increase in user engagement.",
        "Streamlined content workflows and prioritized metadata management, ensuring compliance with WCAG accessibility standards.",
        "Implemented PHP hooks to auto-sanitize text fields, reducing manual content entry tasks by 20%.",
      ],
      skills: ["Drupal", "WCAG", "Docker", "PHP", "ddev"],
    },
    flowai: {
      title: "Software Engineer Intern @ Flow",
      dates: "Aug. 2024 – Jan. 2025",
      description: [
        "Conducted codebase re-validation, identifying and resolving over 30 critical issues across multiple branches.",
        "Developed a microservice processing 1M+ daily data points (Python, AWS Lambda), reducing lead identification latency by 40%.",
        "Integrated over 15 APIs, improving data retrieval speed by 40%.",
      ],
      skills: ["Django", "API Integration", "PostgreSQL"],
    },
    factset: {
      title: "Software Engineer I @ FactSet",
      dates: "Nov. 2021 – Aug. 2022",
      description: [
        "Developed financial data solutions using .NET and Vue.js, enhancing portfolio analysis and attribution models.",
        "Eliminated 2K+ lines of legacy code (Symbology Filters), improving system maintainability.",
        "Built a real-time notifications (WebSocket) and guided UI workflows, reducing support tickets by 25%.",
        "Collaboratively reduced launch time by 50\% through code release automation, demonstrating proficiency in agile methodologies.",
      ],
      skills: [".NET", "Vue.js", "TDD", "JUnit", "SonarQube", "Swagger"],
    },
    feba: {
      title: "Full-Stack Developer @ FebaTech",
      dates: "Jan. 2020 – Nov. 2021",
      description: [
        "Built a digital vault for WILL-related data with a JSON to PDF module, reducing retrieval time by 40%.",
        "Scaled an e-commerce platform to support 500+ products, reducing API latency with Redis caching.",
        "Automated CI/CD pipelines, reducing deployment time by 50%.",
      ],
      skills: ["SpringBoot", "MongoDB", "React", "AWS", "Jest"],
    },
    /*     kaashiv: {
      title: 'Summer Intern @ KaaShiv InfoTech',
      dates: 'Jun. 2019 – Jul. 2019',
      description: [
        'Developed machine learning models with 90% accuracy to predict car prices.',
        'Analyzed 50k+ listings and implemented regression models, optimizing pricing decisions with RMSE evaluation.'
      ],
      skills: ['Machine Learning', 'Data Analysis', 'Python']
    },
    verzeo: {
      title: 'Summer Intern @ Verzeo',
      dates: 'May 2018 – Jun. 2018',
      description: [
        'Trained in Microsoft Azure tools and VMware; worked on a data auditing project for a banking organization using SharePoint Online.'
      ],
      skills: ['Microsoft Azure', 'VMware', 'SharePoint']
    } */
  };

  // Function to handle tab change with animation
  const handleTabChange = (job) => {
    if (job !== activeTab) {
      setShowContent(false);
      setTimeout(() => {
        setActiveTab(job);
        setShowContent(true);
      }, 300);
    }
  };

  return (
    <section id="experience">
      <h2>My Experience</h2>
      <p className="experience__subtitle">
        Where I’ve built, learned, and delivered.
      </p>

      <div className="experience__container">
        {/* Sidebar with Tabs */}
        <div className="experience__tabs">
          {Object.keys(jobs).map((job) => (
            <button
              key={job}
              onClick={() => handleTabChange(job)}
              className={`experience__tab ${activeTab === job ? "active" : ""}`}
            >
              {jobs[job].title.split("@")[1].trim()}
            </button>
          ))}
        </div>

        {/* Job Details with animation */}
        <div className={`experience__content ${showContent ? "show" : ""}`}>
          <h3>{jobs[activeTab].title}</h3>
          <span>{jobs[activeTab].dates}</span>
          <ul>
            {jobs[activeTab].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="experience__skills">
            {jobs[activeTab].skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
