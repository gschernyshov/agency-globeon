import React from "react";
import { NavLink } from "react-router";
import "../styles/style.css";
import "../styles/CompanyInformationSection.css";
import Photo from "../assets/images/photo/group.webp";

const CompanyInformation = () => {
  return (
    <section id="company-information" className="company-information-wrapper">
      <div className="company-information">
        <h1 className="company-information-title"><span className="company-information-text-agency">Агенство</span> <br /><span className="gold-gradient">«Globeon»</span></h1>
        <div className="company-information-description"> 
          <p>Мы предлагаем сервис международного уровня для тех, кто ценит время и результат. 
             Наши клиенты доверяют нам оформление виз, поступление в лучшие университеты мира и сопровождение бизнес-поездок. 
             Мы создаём индивидуальные решения, избавляем от бюрократии и открываем доступ к возможностям, которые недоступны большинству.</p>
          <NavLink to="/contacts" className="gold-gradient">
            Наши контакты
          </NavLink>
        </div>
      </div>
      <div className="company-information-container-photo">
        <img	
          src={Photo}
          alt="Фотография"
          className="company-information-photo"
        />	
      </div>
    </section>
  );
}

export default CompanyInformation;
