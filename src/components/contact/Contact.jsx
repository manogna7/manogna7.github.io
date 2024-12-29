import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("Attempting to send email...");
    try {
      const result = await emailjs.sendForm(
        "service_jslskjw", 
        "template_qjv2bn9", 
        form.current,
        "A1M3P8LtErRjcWk8X" 
      );
      console.log("Email sent successfully:", result.text);

      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error.text);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
