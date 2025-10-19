import React from "react";
import "../styles/style.css";
import "../styles/AdvantageDiv.css";
import Dash from "../assets/images/icons/dash.svg";

const Advantage = ({ title, description }) => {
  return (
    <div className="advantage">
	  <img src={Dash} alt="Иконка тире" />
	  <div className="advantage-description">
		<h3 className="gold-gradient">{title}</h3>
		<p>{description}</p>
	  </div>
	</div>
  );
}

export default Advantage;


