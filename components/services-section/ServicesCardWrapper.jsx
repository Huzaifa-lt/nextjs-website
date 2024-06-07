import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesCardWrapper = () => {
  return (
    <section className="card-section">
      <div className="container md:mx-auto card-wrapper">
        <ServicesCard
          title="Go To Market"
          detail="I guide you in pinpointing, strategizing, and realizing your go-to-market goals across short, medium, and long-term horizons."
        />
        <ServicesCard
          title="Outreach"
          detail="Hands-on, no BS approach to build the scaleable, repeatable outreach machine that your business needs."
        />
        <ServicesCard
          title="Customer Definition"
          detail="Clearly understanding and defining your Ideal Customer is a key foundational block."
        />
        <ServicesCard
          title="Strategic Sales"
          detail="Equip your team with practical skills and strategies, providing focused training and support to build strategic selling as a discipline."
        />
        <ServicesCard
          title="People"
          detail="How to build, retain and inspire your sales team to smash your goals. I absolutely love helping people reach their potential."
        />
        <ServicesCard
          title="Technology"
          detail="A good sales machine needs a range of tools for automation, analytics and engagement. I’ll help you navigate this successfully."
        />
      </div>
    </section>
  );
};

export default ServicesCardWrapper;
