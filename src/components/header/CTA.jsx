import React from "react";
import manogna from "../../assets/manogna.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={manogna} className="btn" target="_blank">
        Download Resume
      </a>
      <a href="#projects" className="btn">
        Explore My Work
      </a>
    </div>
  );
};

export default CTA;
