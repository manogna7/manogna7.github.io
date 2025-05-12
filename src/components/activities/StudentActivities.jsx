import React from "react";
import "./activities.css";

const activities = [
  {
    role: "Web Designing and Technical Lead",
    organization:
      "IEEE Women in Engineering International Leadership Summit, Nagpur",
    date: "Nov. 2020",
    description:
      "Led a team of three in building a website for the summit using WordPress.",
  },
  {
    role: "Support Developer",
    organization: "IEEE Covid Move, IEEE Hyderabad Section",
    date: "Mar. 2020",
    description:
      "Developed a website for IEEE Hyderabad Section’s initiative within 48 hours of reporting the first COVID case in Hyderabad, featuring a project showcase section.",
  },
  {
    role: "Student Network Representative",
    organization: "IEEE Hyderabad Section",
    date: "2019 – 2020",
    description:
      "Analyzed all Student Branches in Hyderabad Section and generated a report to revive inactive ones. Developed a website for Section Student Congress’19 to facilitate registration and idea submission.",
  },
  {
    role: "Chairperson",
    organization: "Women in Engineering – Affinity Group, IEEE – VBIT SB",
    date: "2019 – 2020",
    description:
      "Led a team of four to organize various events, seminars, and conferences. Initiated campaigns to promote women in technology.",
  },
];

const StudentActivities = () => {
  return (
    <section id="activities" className="activities__container">
      <h2>Student Activities</h2>
      <div className="flip-card-grid">
        {activities.map((activity, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{activity.role}</h3>
                <h4>{activity.organization}</h4>
              </div>
              <div className="flip-card-back">
                <p className="activity__date">{activity.date}</p>
                <p className="activity__description">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentActivities;
