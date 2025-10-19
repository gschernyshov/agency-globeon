import React from "react";
import { useState } from "react";
import { QuestionsAnswersList } from "../data.js";
import FaqQuestionAnswer from "./FaqQuestionAnswer";
import "../styles/style.css";
import "../styles/FaqSection.css";
import Photo from "../assets/images/photo/element5-digital-uE2T1tCFsn8-unsplash.webp";

const Faq = () => {
  const [answerActive, setAnswerActive] = useState(null);

  const handleClick = (index) => {
    setAnswerActive((prevIndex) => prevIndex === index ? null : index);
  }

  return (
    <section id="faq" className="faq-wrapper">
		  <h2 className="faq-title gold-gradient">FAQ</h2>
	    <div className="faq">
		    <div className="faq-questions-answers">
          {QuestionsAnswersList.map((faqQuestionAnswer, index) => {
            return (
              <FaqQuestionAnswer 
                key={index} 
                index={index}
                question={faqQuestionAnswer[0]} 
                answer={faqQuestionAnswer[1]} 
                answerActive={answerActive}
                onClick={() => handleClick(index)} 
              />
            );
          })}
		    </div>
        <img	
            src={Photo}	
            alt="Фотография"
            loading="lazy"
            className="faq-photo"
        />	
	    </div>
	  </section>
  );
}

export default Faq;
