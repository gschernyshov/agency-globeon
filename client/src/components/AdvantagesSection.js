import React from "react";
import AdvantageDiv from "./AdvantageDiv";
import { advantagesList } from "../data";
import "../styles/style.css";
import "../styles/AdvantagesSection.css";

const Advantages = () => {
  return (
	  <section className="advantages">
		  <h2 className="advantages-title">Наше агенство это:</h2>
      <div className="advantages-list">
        {advantagesList.map((advantage, index) => {
          return (
            <AdvantageDiv 
              key={index} {...advantage}
            />
          );
        })}
		  </div>
	  </section>
  );
}

export default Advantages;
