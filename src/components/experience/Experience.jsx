import React, { useState, useEffect } from 'react';
import './experience.css';

function Experience() {
  // State to control which job details are displayed
  const [activeTab, setActiveTab] = useState('flowai');
  const [showContent, setShowContent] = useState(true);

  // Chronological job data from most recent to oldest
  const jobs = {
    flowai: {
      title: 'Back-End Engineer Intern @ Flow',
      dates: 'Aug. 2024 – Present',
      description: [
        'Conducted codebase re-validation, identifying and resolving over 30 critical issues across multiple branches.',
        'Integrated over 15 APIs, improving data retrieval speed by 40%.'
      ],
      skills: ['Python', 'API Integration', 'Data Optimization']
    },
    osu: {
      title: 'Web Content Assistant – Extension Service @ Oregon State University',
      dates: 'Sep. 2023 – Present',
      description: [
        'Rebuilt and migrated the codebase from Drupal 8 to 10, enhancing functionality with custom modules and hooks.',
        'Streamlined content workflows and prioritized metadata management, ensuring compliance with WCAG accessibility standards.'
      ],
      skills: ['Drupal', 'WCAG', 'Content Management']
    },
    factset: {
      title: 'Software Engineer I @ FactSet',
      dates: 'Nov. 2021 – Aug. 2022',
      description: [
        'Developed financial data solutions using .NET and Vue.js, enhancing portfolio analysis and attribution models.',
        'Integrated machine learning models into financial applications to improve predictive analytics capabilities.',
        'Implemented notification systems, boosting responsiveness to critical updates by 20%.'
      ],
      skills: ['.NET', 'Vue.js', 'Machine Learning', 'SQL']
    },
    feba: {
      title: 'Full-Stack Developer @ FebaTech',
      dates: 'Jan. 2020 – Nov. 2021',
      description: [
        'Built a digital vault for WILL-related data with a JSON to PDF module, reducing retrieval time by 40%.',
        'Led training programs for 3 interns, helping them transition to full-time junior developers.'
      ],
      skills: ['JavaScript', 'Node.js', 'MongoDB']
    },
    kaashiv: {
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
    }
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
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <div className="experience__container">
        {/* Sidebar with Tabs */}
        <div className="experience__tabs">
          {Object.keys(jobs).map((job) => (
            <button
              key={job}
              onClick={() => handleTabChange(job)}
              className={`experience__tab ${activeTab === job ? 'active' : ''}`}
            >
              {jobs[job].title.split('@')[1].trim()}
            </button>
          ))}
        </div>

        {/* Job Details with animation */}
        <div className={`experience__content ${showContent ? 'show' : ''}`}>
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
