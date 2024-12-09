import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import StudentActivities from "./components/activities/StudentActivities";

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      {/* <StudentActivities /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
