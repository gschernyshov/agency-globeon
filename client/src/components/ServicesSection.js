import React from "react";
import { useState } from "react";
import Button from "./ButtonServices.js";
import ServiceDiv from "./ServiceDiv.js";
import { servicesList } from "../data.js";
import "../styles/style.css";
import "../styles/ServicesSection.css";

const Services = () => {
  const [typeService, setTypeService] = useState("Виза");

  const handleClick = (valueTypeService) => {
    if (valueTypeService !== typeService){
      setTypeService(valueTypeService);
    }
  };

  return (
    <section id="services" className="services">
	    <div className="services-header">
		    <h2 className="services-header-title gold-gradient">Наши услуги</h2>
		    <p className="services-header-description">Мы предлагаем комплекс международных услуг: визы для путешествий и бизнеса, поступление в зарубежные вузы, помощь с картой АТЭС и оформление необходимых документов. Наша задача — сделать процесс максимально удобным и надёжным, чтобы вы могли сосредоточиться на своих целях, а не на бумажной работе.</p>
	    </div>
	    <div className="services-list-wrapper">
	  	  <div className="services-list">
          {Object.entries(servicesList).map((servicesListItem) => {
            return (
	            <Button 
                key={servicesListItem[0]}
                isActive={typeService ===  servicesListItem[0]} 
                onClick={() => handleClick(servicesListItem[0])}
              >
                {servicesListItem[0]}
              </Button>
            );   
          })}
		    </div>
		    <ServiceDiv 
          description={servicesList[typeService].description}
          serviceVariants={servicesList[typeService].serviceVariants}
        />
	    </div>
	  </section>
  );
}

export default Services;
