import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import ContactsSection from "../components/ContactsSection";
import FeedbackSection from "../components/FeedbackSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

const ContactsPage = ({ path }) => {
  const main = useRef(null);

  useEffect(() => {
    main.current.scrollIntoView();
  }, []);

  return (
    <>
      <Header path={path} />
      <main ref={main}>
        <ContactsSection />
        <FeedbackSection />
        <FaqSection />
      </main>
      <Footer path={path} />
    </>
  );
}

export default ContactsPage;
