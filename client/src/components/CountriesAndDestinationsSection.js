import React from "react";
import { CountriesList } from "../data.js";
import "../styles/style.css";
import "../styles/CountriesAndDestinationsSection.css";

const CountriesAndDestinations = () => {
  return (
    <section className="countries-and-destinations">
	  <div className="countries-and-destinations-header">
		<h2 className="countries-and-destinations-header-title gold-gradient">Страны и направления</h2>
		<p className="countries-and-destinations-header-description">Каждая страна открывает уникальные возможности — будь то обучение в престижных университетах Великобритании, бизнес-контакты в Сингапуре или новые горизонты в США. Мы предлагаем комплексное сопровождение для тех, кто ценит время и результат. Здесь вы найдёте актуальную информацию по ключевым направлениям, где важна скорость, надёжность и доступ к международным возможностям.</p>
	  </div>
	  <div className="countries-and-destinations-list-wrapper">
		<div className="countries-and-destinations-list">
		  {CountriesList.map((countrie) => {
			return (
			  <div key={countrie[0]} className="countrie-and-destination" style={countrie[1]}>
			    <h3>{countrie[0]}</h3>
		      </div>
			);
		  })}
		</div>
	  </div>
	</section>
  );
}

export default CountriesAndDestinations;
