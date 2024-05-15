import React from "react";
import "./resources.Module.css";
import ResourcesHero from "../../components/resources-section/ResourcesHero";
import CardWrapper from "../../components/resources-section/CardWrapper";
import Footer from "../../components/Footer";

const ResourcesPage = () => {
  return (
    <>
      <ResourcesHero />
      <CardWrapper />
      <Footer />
    </>
  );
};

export default ResourcesPage;
