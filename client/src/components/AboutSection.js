import React from "react";
import { NavLink } from "react-router";
import "../styles/style.css";
import "../styles/AboutTheCompanySection.css";
import ArrowSubDownRight from "../assets/images/icons/arrow-sub-down-right.svg";

const About = () => {
  return (
    <section id="about" className="about">
	  <div className="about-title">
        <span></span>
	    <h2>О нас</h2>
	  </div>
	  <div className="about-description">
		<h3>Открываем доступ к возможностям, закрытым для большинства.</h3>
		<p>Мы создаём сервис международного уровня для тех, кто ценит время, комфорт и результат. Наши клиенты доверяют нам оформление виз, поступление в лучшие университеты и сопровождение бизнес-поездок. Мы предоставляем персональное решение под каждую задачу, исключаем лишние хлопоты и открываем доступ к новым возможностям по всему миру.</p>		
		<div className="about-description-link">
		  <img src={ArrowSubDownRight} alt="Иконка стрелки" />
		  <p>
			<NavLink to="/about">
			  О нас
			</NavLink>
		  </p>
		</div>
	  </div>
	</section>
  );
}

export default About;
