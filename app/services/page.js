import React from "react";
import "./services.Module.css";
import ServicesHero from "../../components/services-section/ServicesHero";
import ServicesIntro from "../../components/services-section/ServicesIntro";
import ServicesApproach from "../../components/services-section/ServicesApproach";
import FractionalTechnology from "../../components/services-section/FractionalTech";
import ServicesCardWrapper from "../../components/services-section/ServicesCardWrapper";
import Footer from "../../components/Footer";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesApproach />
      <FractionalTechnology />
      <ServicesCardWrapper />
      <Footer />
    </>
  );
};

export default ServicesPage;
