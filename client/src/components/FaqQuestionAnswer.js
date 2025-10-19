import React from "react";
import AddPlus from "../assets/images/icons/add-plus.svg";
import Close from "../assets/images/icons/close-md.svg";
import "../styles/style.css";
import "../styles/FaqQuestionAnswer.css";

const FaqQuestionAnswer = ({ index, question, answer, answerActive, onClick }) => {
  return (
    <div className="faq-question-answer">
      <div className="faq-question">
        <p>{question}</p>
        <img src={index === answerActive ? Close : AddPlus} alt="Иконка плюса" className="faq-question-img" onClick={onClick}/>
      </div>
      <div 
        className={`faq-answer ${index === answerActive ? "faq-answer-active" : ""}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqQuestionAnswer;
