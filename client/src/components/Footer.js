import React from "react";
import MenuLinks from "./MenuLinks";
import "../styles/style.css";
import "../styles/Footer.css";
import Logo from "../assets/images/logo.svg";
import PaperPlane from "../assets/images/icons/paper-plane.svg"
import Phone from "../assets/images/icons/phone.svg"
import Mail from "../assets/images/icons/mail.svg"
import Telegram from "../assets/images/icons/telegram.svg"
import WhatsApp from "../assets/images/icons/whatsapp.svg"

const Footer = ({ path }) => {
  return (
    <footer className="footer">
	  <nav className="footer-nav">
		<img src={Logo} alt="Изображение логотипа" className="footer-logo" />

		<menu className="footer-menu">
          <MenuLinks
            path={path}
            сloseMenuMobile={undefined}
          />
		</menu>

		<a href="#feedback">
		  <div className="footer-feedback">
			<img src={PaperPlane} alt="Иконка самолётика" />
			<p>Обратная связь</p>
		  </div>
	    </a>
      </nav>

      <div className="footer-contact-information">
        <div className="footer-contacts-and-messengers">
     	  <div className="footer-contacts">
     	    <a href="tel:79951484821">
			  <div className="footer-contact">
     		    <img src={Phone} alt="Иконка телефона" />
     		    <p>+7 (995) 148-48-21</p>
     		  </div>
			</a>
			<a href="email:office@agency-globeon.ru">
              <div className="footer-contact">
                <img src={Mail} alt="Иконка письма" />
                <p>office@agency-globeon.ru</p>
              </div>
			</a>
     	  </div>

      	  <div className="footer-messengers">
     	 	<a href="https://t.me/+79951484821">
			  <div className="footer-messenger">
     		    <img src={Telegram} alt="Иконка Telegram" />
     		    <p>Telegram</p>
     	 	  </div>
			</a>
			<a href="https://wa.me/+79951484821">
              <div className="footer-messenger">
     		    <img src={WhatsApp} alt="Иконка WhatsApp" />
     		    <p>WhatsApp</p>
     		  </div>
			</a>
          </div>
     	</div>

     	<div className="footer-social-network">
     	  <div className="footer-social-network-links">
     		<a href="https://t.me/agency_globeon">Telegram</a>
     	 	<a href="https://instagram.com/agency_globeon">Instagram</a>
     	  </div>
     	  <div className="footer-social-network-links">
     	    <a href="https://facebook.com/agency_globeon">Facebook</a>
     	    <a href="https://vk.com/agency_globeon">Вконтакте</a>
     	  </div>
        </div>
      </div>

      <hr className="footer-hr" />

	  <div className="footer-introduction">
		<h1>Агенство <span className="gold-gradient">«Globeon»</span></h1>
		<p>Мы открываем перед вами весь <br />мир — от учёбы и карьеры <br />до путешествий и бизнеса.</p>
	  </div>

	  <div className="footer-legal-information">
		<a href="../assets/documents/file.pdf">© 2025 Globeon</a>
		<a href="../assets/documents/file.pdf">Политика конфиденциальности</a>
		<a href="../assets/documents/file.pdf">Договор оферты</a>
	  </div>
	</footer>
  );
}

export default Footer;
