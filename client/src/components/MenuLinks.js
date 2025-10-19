import React from "react";
import { NavLink } from "react-router";
import "../styles/style.css";
import "../styles/MenuLinks.css";

const MenuLinks = ({ path, closeMenuMobile }) => {
  return (
    <>
      <li className="menu-item">
        { path === "/" && <a href="#introduction" className="active" onClick={closeMenuMobile}>Главная</a> }
        { path === "/about" && <NavLink to="/">Главная</NavLink> }
        { path === "/contacts" && <NavLink to="/">Главная</NavLink> }
      </li>
	    <li className="menu-item">
        { path === "/" && <a href="#about" onClick={closeMenuMobile}>О нас</a> }
        { path === "/about" && <NavLink to="/about">О нас</NavLink> }
        { path === "/contacts" && <NavLink to="/about">О нас</NavLink> }
      </li>
	    <li className="menu-item">
        { path === "/" && <a href="#services" onClick={closeMenuMobile}>Услуги</a> }
        { path === "/about" && <NavLink to="/services">Услуги</NavLink> }
        { path === "/contacts" && <NavLink to="/services">Услуги</NavLink> }
      </li>
	    <li className="menu-item">
        <a href="#faq" onClick={closeMenuMobile}>FAQ</a>
      </li>
      <li className="menu-item">
        <NavLink to="/contacts">Контакты</NavLink>
      </li>
    </>
  );
}

export default MenuLinks;
