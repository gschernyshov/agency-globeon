import React from "react";
import "../styles/style.css";
import "../styles/ButtonServices.css";

const ButtonServices = ({ children, isActive, onClick }) => {
  return (
    <button 
      className={`services-button ${isActive && "services-button-active"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonServices;
