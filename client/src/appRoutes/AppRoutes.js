import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import ApplicationsPage from "../pages/ApplicationsPage";

const appRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <MainPage path="/" />} />
        <Route path="/services" element={ <MainPage path="/" activeSection="services" /> } />
        <Route path="/about" element={ <AboutPage path="/about"/> } />
        <Route path="/contacts" element={ <ContactsPage path="/contacts"/> } />
        <Route path="/applications" element={ <ApplicationsPage /> } />
        <Route path="*" element={ <MainPage path="/"/> } />
      </Routes>
    </>
  )
}

export default appRouter;
