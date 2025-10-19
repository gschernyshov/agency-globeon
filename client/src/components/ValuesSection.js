import React from "react";
import "../styles/style.css";
import "../styles/ValuesSection.css";

const Values = () => {
  return (
    <section className="values-wrapper">
      <h2 className="values-title gold-gradient">Наши ценности</h2>
      <div className="values">
        <div className="value">
          <h3>Надёжность</h3>
          <p>Каждый клиент уверен в результате.</p>
        </div>
        <div className="value">
          <h3>Прозрачность</h3>
          <p>Никаких скрытых условий.</p>
        </div>
        <div className="value">
          <h3>Индивидуальность</h3>
          <p>Решения под цели клиента.</p>
        </div>
        <div className="value">
          <h3>Профессионализм</h3>
          <p>Только проверенные специалисты.</p>
        </div>
      </div>
    </section>
  );
}

export default Values;
