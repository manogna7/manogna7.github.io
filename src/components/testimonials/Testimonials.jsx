import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

const testimonials = [
  {
    avatar: require("./img2.png"),
    name: "Geethanjali Kommu",
    review:
      "Manogna and I worked on the same team as full-stack developers at Factset. She worked on bug resolutions, feature enhancements, and new feature development. She understands the problem very well and researches different ways to solve it. Her ability to juggle multiple projects was unlike any I've seen. She is a combination of patience, a 'student for life' mindset, and good technical skills. I'm sure she will be a valuable addition to the next team she joins.",
  },
  {
    avatar: require("./image.png"),
    name: "Michele Schieb",
    review:
      "Manogna Challoju and I worked on the same communications team at Oregon State University. She is friendly, courteous, patient, professional and willing to take on various projects. She quickly learned the back end of the content management system to complete a wide range of tasks. Manogna is conscientious about providing accurate information for front-end web content to create a more usable and accessible experience online for the public. As her colleague, I have confidence in her work. She progressed quickly, multi-tasking through all the web projects to help us move projects forward. She asks clarification questions and offers suggestions when problem-solving a new process. Manogna also showed interest and participated in opportunities to grow as a professional in the technology field, and I feel she will contribute fully to any workplace that supports that growth.",
  },
  {
    avatar: require("./img3.png"),
    name: "Venkata Ramanarao Ponnapalli",
    review:
      "Manogna was a Full-Stack lead engineer for all FEBATECH Applications under IT Services. She was responsible for delivering business outcomes for all complex and innovative projects, client needs, and strategic business goals. She acted as a servant leader, helped stakeholders make the right decisions, and provided recommendations aligned with the company's vision. She maintains a very cordial relationship with associates, shares knowledge with the team, and has a knack for working collaboratively and delivering the best to the customer.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <section id="testimonials" className="testimonials__container">
      <h2>Testimonials</h2>
      <p className="testimonial__subtitle">From the people I've worked with</p>
      <Slider {...settings}>
        {testimonials.map(({ avatar, name, review }, index) => (
          <div key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
