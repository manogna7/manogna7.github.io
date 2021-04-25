import React from "react";
import "./testimonials.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img2} alt="Avatar Two" />
          </div>
          <h3 className="client__name">Venkata Ramanarao Ponnapalli</h3>
          <h5>
            Co-Founder, AWS Cloud Solutions Architect | Febazmart Pvt. Ltd.
          </h5>

          <small className="client__review">
            Manogna Ch. was a Full-Stack lead engineer for all FEBATECH
            Applications under IT Services. She was responsible for delivering
            business outcomes of all complex and innovative projects, client
            needs, and strategic business goals. She acted as a servant leader,
            helped stakeholders make the right decisions, and provided
            recommendations aligned with the company's vision. She maintains a
            very cordial relationship with the associates, shares knowledge with
            the team, and has a knack for working collaboratively and delivering
            the best to the customer.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img1} alt="Avatar One" />
          </div>
          <h3 className="client__name">Geethanjali Kommu</h3>
          <h5>Software Engineer III | FactSet Research Systems</h5>

          <small className="client__review">
            Manogna and I worked on same team as full stack developers in
            Factset. She worked on bug resolutions, feature enhancements, and
            new features development. She understands the problem very well and
            researches for the different ways to do it. Her ability to juggle
            multiple projects was unlike any I've seen. She is a combination of
            patience, 'student for life' mindset, and has good technical skills.
            I'm sure she will be a valuable addition to the next team she joins.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img3} alt="Avatar One" />
          </div>
          <h3 className="client__name">Ishrath</h3>
          <h5>Growth Product Manager | Durity</h5>

          <small className="client__review">
            Working with Manogna has been a pleasure. Her technical skills and
            innovative ideas have consistently impressed our team. Manogna's
            work on our product Durity, a platform for generating legal wills,
            has been exceptional. She was able to work on critical features of
            the application, including payment processing and document
            generation, with minimal supervision and a high degree of
            efficiency. Her work also included key design changes that have greatly
            improved the user experience.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
