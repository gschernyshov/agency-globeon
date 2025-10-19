import React, { useState, useRef, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import "../styles/style.css";
import "../styles/FeedbackSection.css";

const Feedback = () => {
  const { request, error, clearError } = useHttp();
  const message = useMessage();
  let feedbackMessage = useRef(null);
  let button = useRef(null);
  let disabledField = useRef(false);

  useEffect(() => {
	message(feedbackMessage, error);
	button.current.textContent = "Отправить";
	clearError();
  }, [message, error, clearError]);
  
  const [form, setForm] = useState({
	name: "",
	hasErrorInputName: false,
	telephone: "",
	hasErrorInputTelephone: false,
  });

  function handleNameChange(event) {
	setForm((prev) => ({
	  ...prev,
	  name: event.target.value,
	  hasErrorInputName: event.target.value.trim().length === 0
	}));
  }

  function handleTelephoneChange(event) {
	setForm((prev) => ({
	  ...prev,
	  telephone: event.target.value,
	  hasErrorInputTelephone: event.target.value.trim().length === 0
	}));
  }

  const feedbackHandler = async () => {
	try {
		button.current.textContent = "Отправка...";
		const data = await request("/api/feedback/handlers", "POST", {...form});
		message(feedbackMessage, data.message);
		button.current.textContent = "Отправлено";
		disabledField.current = true;
	} catch (e) {}
  }

  return (
	<section id="feedback" className="feedback-wrapper">
	  <div className="feedback">
        <h2 className="feedback-title">Оставьте свои контактные данные для консультации:</h2>
		<p ref={feedbackMessage} className="feedback-message"></p>
	    <form id="feedbackForm" className="feedback-form">
		  <input 
		    type="text" 
		    name="name" 
		    placeholder="Ваше имя" 
		    value={form.name} 
			className="feedback-form-input"
		    style={{
			  background: disabledField.current ? "linear-gradient(to right, #BF953F50, #FCF6BA50, #B3872850, #FBF5B750, #AA771C50), white" : "white",
			  border: form.hasErrorInputName ? "2px solid #BF953F" : null
		    }}
		    onChange={handleNameChange}
			disabled={disabledField.current}
		  />
		  <input 
		    type="tel" 
		    name="telephone" 
		    placeholder="Номер телефона"
		    value={form.tel} 
			className="feedback-form-input"
		    style={{
			  background: disabledField.current ? "linear-gradient(to right, #BF953F50, #FCF6BA50, #B3872850, #FBF5B750, #AA771C50), white" : "white",
			  border: form.hasErrorInputTelephone ? "2px solid #BF953F" : null
		    }}
		    onChange={handleTelephoneChange}
			disabled={disabledField.current}
		  />
		  <button ref={button}
		    type="submit"
		    className="feedback-form-button" 
			onClick={e => {
				e.preventDefault()
				feedbackHandler();
			}}
			disabled={disabledField.current}
		  >Отправить</button>
	    </form>
	    <p className="feedback-legal-information">Нажимая кнопку отправить Вы даёте согласие на <a href="../assets/documents/file.pdf">обработку персональных данных</a>.</p>
	  </div>
	</section>
  );
}

export default Feedback;
