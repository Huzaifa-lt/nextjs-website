import React from "react";

const ServicesCard = ({ title, detail }) => {
  return (
    <div className="card">
      <h3 className="text-[#EC8B5D] uppercase text-lg font-bold leading-[140%] md:text-2xl md:leading-[140%]">
        {title}
      </h3>
      <p className="mb-5 text-xl text-white">{detail}</p>
    </div>
  );
};

export default ServicesCard;
