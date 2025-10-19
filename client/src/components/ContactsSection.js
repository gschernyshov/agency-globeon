import React from "react";
import "../styles/style.css";
import "../styles/ContactsSection.css";
import Photo from "../assets/images/photo/poezdka-na-samolete.webp";
import TelegramIcon from "../assets/images/icons/telegram.svg";
import InstagramIcon from "../assets/images/icons/instagram.svg";
import FacebookIcon from "../assets/images/icons/facebook.svg";
import VkIcon from "../assets/images/icons/vk.svg";

const ContactsSection = () => {
  return (
    <section id="contacts-wrapper" className="contacts-wrapper">
      <div className="contacts-header">
        <h2 className="contacts-header-title gold-gradient">Наши контакты</h2>
        <p className="contacts-header-description">Свяжитесь с нами в любое время.</p>
      </div>
      <div className="contacts">
        <img	  
          src={Photo}		
          alt="Фотография"
          className="contacts-photo"
        />	
        <div className="contacts-information">
          <div className="contacts-telephone-and-email">
            <a href="tel:79951484821" className="contact">+7 (995) 148-48-21</a>
            <a href="email:office@agency-globeon.ru" className="contact">office@agency-globeon.ru</a>
          </div>
          <div className="messengers">
            <a href="https://t.me/+79951484821" className="messenger"><span className="gold-gradient">/</span> Telegram</a>
            <a href="https://wa.me/+79951484821" className="messenger"><span className="gold-gradient">/</span> WhatsApp</a>
          </div>
          <div className="social-network">
            <a href="https://t.me/agency_globeon"><img src={TelegramIcon} alt="Иконка Telegram" /></a>
            <a href="https://instagram.com/agency_globeon"><img src={InstagramIcon} alt="Иконка Instagram" /></a>
            <a href="https://facebook.com/agency_globeon"><img src={FacebookIcon} alt="Иконка Facebook" /></a>
            <a href="https://vk.com/agency_globeon"><img src={VkIcon} alt="Иконка ВКонтакте" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
