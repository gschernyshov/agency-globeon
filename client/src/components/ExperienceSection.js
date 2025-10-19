import React from "react";
import "../styles/style.css";
import "../styles/ExperienceSection.css";

const Experience = () => {
  return ( 
    <section className="experience-wrapper">
      <h2 className="experience-title gold-gradient">Опыт в цифрах</h2>
      <div className="experience">
        <div className="experience-item">
          <h3>10+</h3>
          <p>лет работы</p>
        </div>
        <div className="experience-item">
          <h3>1000+</h3>
          <p>оформленных виз</p>
        </div>
        <div className="experience-item">
          <h3>200+</h3>
          <p>студентов за рубежом</p>
        </div>
        <div className="experience-item">
          <h3>20+</h3>
          <p>стран-партнёров</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
