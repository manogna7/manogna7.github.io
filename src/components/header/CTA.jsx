import React from "react";
import manogna from "../../assets/manogna.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={manogna} className="btn" target="_blank">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
