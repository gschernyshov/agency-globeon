import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import IntroductionSection from "../components/IntroductionSection";
import AboutTheCompanySection from "../components/AboutSection";
import AdvantagesSection from "../components/AdvantagesSection";
import ServicesSection from "../components/ServicesSection";
import CountriesAndDestinationsSection from "../components/CountriesAndDestinationsSection";
import FaqSection from "../components/FaqSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const MainPage = ({ path, activeSection }) => {
  const introductionSection = useRef(null);
  const servicesSection = useRef(null);

  useEffect(() => {
    if (activeSection === "services"){
      servicesSection.current.scrollIntoView();
    } else {
      introductionSection.current.scrollIntoView();
    }
  });

  return (
    <>
      <Header path={path} />
      <div ref={introductionSection}>
        <IntroductionSection  />
      </div> 
      <main>
        <AboutTheCompanySection />
        <AdvantagesSection />
        <div ref={servicesSection}>
          <ServicesSection />
        </div>
        <CountriesAndDestinationsSection />
        <FaqSection />
        <FeedbackSection />
      </main>
      <Footer path={path} />
    </>
  );
}

export default MainPage;
