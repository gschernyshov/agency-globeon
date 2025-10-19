import React from "react";
import "../styles/style.css";
import "../styles/MissionSection.css";

const Mission = () => {
  return (
    <section className="mission">
      <h2 className="mission-title gold-gradient">Наша миссия</h2>
      <div className="mission-quote-wrapper">
        <div className="mission-quote">
          <p>«Мы открываем людям доступ к учёбе, работе <br />и бизнесу за границей, делая сложные <br />процессы простыми и доступными.»</p>
          <h3>Георгий Графский, учредитель агенства.</h3>
        </div>
      </div>
    </section>
  );
}

export default Mission;
