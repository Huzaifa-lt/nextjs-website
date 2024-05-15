import React from "react";

const ServicesCard = ({ title, detail }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default ServicesCard;
