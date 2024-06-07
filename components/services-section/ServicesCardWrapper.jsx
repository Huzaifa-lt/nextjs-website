import React from "react";
import ServicesCard from "./ServicesCard";
import Link from "next/link";

const ServicesCardWrapper = () => {
  return (
    <section className="card-section">
      <div className="container md:mx-auto card-wrapper">
        <ServicesCard
          title="Technology"
          detail="Needs to have automation, analytics and engagement at near realtime basis. I’ll help you enable this successfully."
        />
        <ServicesCard
          title="AI and its Impact"
          detail="Without you dictating how AI will help, your competitors will be in charge. I'll protect you from the murky waters."
        />
        <ServicesCard
          title="Scalability"
          detail="Replicate your success to all parts of the world. Build a scalable business model. Let's chat."
        />
        <ServicesCard
          title="Customer Definition"
          detail="Clearly understanding and defining your ideal customer is a key foundational block."
        />
        <ServicesCard
          title="Strategic Thinking"
          detail="Equip your team with practical skills and strategies, providing focused training and support to build strategic thinking as a discipline."
        />
        <ServicesCard
          title="People"
          detail="How to build, retain and inspire your team. I absolutely love helping people reach their potential."
        />
      </div>
    </section>
  );
};

export default ServicesCardWrapper;
