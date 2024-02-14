import React from "react";
import manogna from "../../assets/manogna.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={manogna} className="btn" target="_blank">
        Download Resume
      </a>
      <a href="https://bento.me/manogna" className="btn" target="_blank">
        Bento
      </a>
    </div>
  );
};

export default CTA;
