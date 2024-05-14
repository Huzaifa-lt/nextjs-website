import React from "react";
import "./about.Module.css";
import AboutHero from "../../components/about-section/AboutHero";
import AboutSelf from "../../components/about-section/AboutSelf";
import AboutDetail from "../../components/about-section/AboutDetail";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutSelf />
      <AboutDetail />
      <Footer />
    </>
  );
};

export default About;
