import React from "react";
import { TeamList } from "../data.js";
import "../styles/style.css";
import "../styles/TeamSection.css";

const Team = () => {
  return (
    <section className="team-wrapper">
      <h2 className="team-title gold-gradient">Наша команда</h2>
      <div className="team">
        {TeamList.map((teamMember, index) => {
          return (
            <div key={index} className="team-member">
              <img src={teamMember.photo} alt="Фотография члена команды" />
              <h3>{teamMember.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Team;
