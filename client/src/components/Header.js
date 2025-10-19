import React, { useState } from "react";
import { motion, useScroll } from "motion/react";
import MenuLinks from "./MenuLinks";
import "../styles/style.css";
import "../styles/Header.css";
import Logo from "../assets/images/logo.svg";
import PaperPlane from "../assets/images/icons/paper-plane.svg";
import Hamburger from "../assets/images/icons/hamburger-md.svg";
import Close from "../assets/images/icons/close-md.svg";

const Header = ({ path }) => {
  const { scrollYProgress } = useScroll();
  const [toogleMenu, setToggleMenu] = useState(false);

  let headerLogoLink;

  switch(path) {
    case "/":  
      headerLogoLink = "#introduction";
      break;
    case "/about":
      headerLogoLink = "#company-information";
      break;
    case "/contacts":  
      headerLogoLink = "#contacts-wrapper";
      break;
    default:
      headerLogoLink= "";
  }

  const openMenuMobile = () => {
    setToggleMenu(true);
  }

  const closeMenuMobile = () => {
    setToggleMenu(false);
  }

  return (
    <header className="header">
      <a href={headerLogoLink} className="header-logo-link">
        <img src={Logo} alt="Изображение логотипа" className="header-logo" />
      </a>

			<menu className="header-menu">
        <MenuLinks
          path={path}
          loseMenuMobile={undefined}
        />
			</menu>

			<a href="#feedback">
        <div className="header-feedback">
				  <img src={PaperPlane} alt="Иконка самолётика" />
				  <p>Обратная связь</p>
			  </div>
      </a>

      <div className="header-menu-img-wrapper">
        <img 
          src={Hamburger} 
          alt="Иконка меню" 
          style={{display: toogleMenu ? "none" : "block"}}
          className="header-menu-img" 
          onClick={() => openMenuMobile()} 
      />
      </div>

      {toogleMenu && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.3}}
          className="header-menu-mobile-wrapper"
        > 
          <div className="header-menu-mobile-close-img-wrapper">
            <img 
              src={Close} 
              alt="Иконка закрытия меню" 
              className="header-menu-mobile-close-img" 
              onClick={() => closeMenuMobile()} 
            />
          </div>
          
          <menu className="header-menu-mobile">
            <MenuLinks 
              path={path}
              closeMenuMobile={() => closeMenuMobile()}
            />
          </menu>
        </motion.div>
      )}

      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
      ></motion.div>
    </header>
  );
}

export default Header;
