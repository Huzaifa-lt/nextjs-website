import React from "react";
import ContactHero from "../../components/contact-section/ContactHero";
import "./contact.Module.css";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactPage;
