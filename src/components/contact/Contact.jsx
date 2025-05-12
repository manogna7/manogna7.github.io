import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const result = await emailjs.sendForm(
        "service_jslskjw",
        "template_qjv2bn9",
        form.current,
        "A1M3P8LtErRjcWk8X",
      );
      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <h2>Let’s Connect</h2>
      <p className="contact__intro">
        Have a question, feedback, or just want to say hi? Drop me a message.
      </p>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="What's your name?"
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Drop your email"
            required
          />

          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder="Tell me what you're thinking..."
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`form-status ${status.includes("successfully") ? "success" : "error"}`}
            >
              {status}
            </p>
          )}
        </form>

        <p className="alt-contact-note">
          Prefer another way to connect? Send me an{" "}
          <a href="mailto:manogna.challoju@gmail.com">Email</a> or connect on{" "}
          <a
            href="https://linkedin.com/in/manognach"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;
