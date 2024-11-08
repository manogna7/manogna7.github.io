import React, { useState, useEffect } from "react";
import "./testimonials.css";

const testimonials = [
  {
    name: "Geetanjali Kommu",
    title: "Senior Software Engineer | FactSet Research Systems",
    review:
      "Manogna and I worked on the same team as full stack developers in FactSet. She worked on bug resolutions, feature enhancements, and new features development. Her ability to juggle multiple projects was unlike any I've seen. She is a combination of patience, a 'student for life' mindset, and has good technical skills. I'm sure she will be a valuable addition to the next team she joins.",
    avatar: "path/to/avatar1.jpg"
  },
  {
    name: "Michele Scheib",
    title: "Content Strategist, OSU Extension Communications",
    review:
      "Manogna is friendly, courteous, and professional. She quickly adapted to our content management system and provided accurate front-end content to create a more usable and accessible experience online for the public.",
    avatar: "path/to/avatar2.jpg"
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // 5 seconds for each testimonial

  // Automatically rotate testimonials every intervalTime
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, intervalTime);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  // Function to manually go to a specific testimonial
  const goToTestimonial = (index) => {
    setCurrentIndex(index); // Update current index
  };

  return (
    <section id="testimonials" className="container testimonials__container">
      <h2>Testimonials</h2>
      <div className="testimonial fade-in">
        <div className="client__avatar">
          <img src={testimonials[currentIndex].avatar} alt={`${testimonials[currentIndex].name}'s avatar`} />
        </div>
        <h3>{testimonials[currentIndex].name}</h3>
        <h4>{testimonials[currentIndex].title}</h4>
        <p className="client__review">{testimonials[currentIndex].review}</p>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`dot ${currentIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
