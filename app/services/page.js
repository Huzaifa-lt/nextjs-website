import React from "react";
import "./services.Module.css";
import ServicesHero from "../../components/services-section/ServicesHero";
import ServicesIntro from "../../components/services-section/ServicesIntro";
import ServicesApproach from "../../components/services-section/ServicesApproach";
import FractionalSales from "../../components/services-section/FractionalSales";
import ServicesCardWrapper from "../../components/services-section/ServicesCardWrapper";
import Footer from "../../components/Footer";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesApproach />
      <FractionalSales />
      <ServicesCardWrapper />
      <Footer />
    </>
  );
};

export default ServicesPage;
