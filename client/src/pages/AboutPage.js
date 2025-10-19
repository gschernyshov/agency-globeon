import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import CompanyInformationnSection from "../components/CompanyInformationSection";
import MissionnSection from "../components/MissionSection";
import ValuesnSection from "../components/ValuesSection";
import ExperiencenSection from "../components/ExperienceSection";
import TeamnSection from "../components/TeamSection";
import FaqnSection from "../components/FaqSection";
import FeedbacknSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const AboutPage = ({ path }) => {  
  const companyInformationSection = useRef(null);

  useEffect(() => {
    companyInformationSection.current.scrollIntoView();
  }, []);

  return (
    <>
      <Header path={path} />
      <div ref={companyInformationSection}>
        <CompanyInformationnSection />
      </div>
      <main>
        <MissionnSection />
        <ValuesnSection />
        <ExperiencenSection />
        <TeamnSection />
        <FaqnSection />
        <FeedbacknSection />
      </main>
      <Footer path={path} />
    </>
  );
}

export default AboutPage;
