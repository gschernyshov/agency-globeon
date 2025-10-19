import React from "react";
import "../styles/style.css";
import "../styles/IntroductionSection.css";

const Introduction = () => {
  return (
    <section id="introduction" className="introduction">
	  <h1 className="introduction-title">Агенство <span className="gold-gradient">«Globeon»</span></h1>
	  <p className="introduction-description">Мы открываем перед вами весь мир — от учёбы и карьеры <br />до путешествий и бизнеса.</p>
	  <div className="introduction-buttons">
	    <a href="#services">
		  <button className="introduction-button">Услуги</button>
		</a>
	    <a href="#feedback">
		  <button className="introduction-button introduction-button-feedback">Обратная связь</button>
		</a>
      </div>
	</section>
  );
}

export default Introduction;
