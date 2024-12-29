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
    avatar: require("./img3.png"), 
    name: "Venkata Ramanarao Ponnapalli",
    review:
      "Manogna Ch. was a Full-Stack lead engineer for all FEBATECH Applications under IT Services. She was responsible for delivering business outcomes for all complex and innovative projects, client needs, and strategic business goals. She acted as a servant leader, helped stakeholders make the right decisions, and provided recommendations aligned with the company's vision. She maintains a very cordial relationship with associates, shares knowledge with the team, and has a knack for working collaboratively and delivering the best to the customer.",
  },
  {
    avatar: require("./img1.jpg"), 
    name: "McKenzie Heryford",
    review:
      "Manogna is very efficient and detail-oriented when working on digital content maintenance audits. She learns quickly and always asks insightful questions. Manogna also crowdsources for troubleshooting as needed. She is an asset to our team.",
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
    <section id="testimonials">
      <h2>Testimonials</h2>

      <Slider {...settings} className="testimonials__container">
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
