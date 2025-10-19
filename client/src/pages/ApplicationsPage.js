import React, { useRef, useEffect } from "react";
import ApplicationsSection from "../components/ApplicationsSection";

const ContactsPage = () => {
  const main = useRef(null);

  useEffect(() => {
    main.current.scrollIntoView();
  }, []);

  return (
    <>
      <main ref={main}>
        <ApplicationsSection />
      </main>
    </>
  );
}

export default ContactsPage;
