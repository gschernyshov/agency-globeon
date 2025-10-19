import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "../styles/style.css";
import "../styles/ServiceDiv.css";

const Service = ({description, serviceVariants}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    ref.current.classList.add("service-animate");
    const timer = setTimeout(() => ref.current.classList.remove("service-animate"), 400);

    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <div ref={ref} className="service">
      <p className="service-description">{description}</p>
	    <div className="service-variants">
        {serviceVariants.map((serviceVariant) => {
          return (
		        <div 
              key={serviceVariant}
              className="service-variant"
            >
              <span></span>
              <p className="gold-gradient">{serviceVariant}</p>
            </div>
          );
        })}
	    </div>
    </div>
  );
}

export default Service;
