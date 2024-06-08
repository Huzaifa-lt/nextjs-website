import Image from "next/image";
import React from "react";

const ServicesApproach = () => {
  return (
    <section className="background-img">
      <div className="container section-wrapper md:mx-auto img-wrapper flex flex-col justify-start items-start gap-2 md:gap-4">
        <h2>Approach</h2>
        <Image
          src="https://d12852wca2dyvw.cloudfront.net/QE-Banner.gif"
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="container section-wrapper md:mx-auto flex flex-col items-start justify-start gap-2 content-wrapper md:gap-4">
        <span className="mb-6 text-[#EC8B5D] text-center font-bold uppercase px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]">
          Tech & AI Workshop $4,950 exc GST.
        </span>
        <p className="mb-6 text-lg leading-[140%]">
          - Quantum Edge<br/>
          -- 3 pronged :<br/>
            - Quantum Marketing<br/>
            - Quantum AI<br/>
            - Quantum Integration / Marketplace<br/>
              ( where classical and quantum technology worlds collide )
          <br/><br/>
          This workshop is designed to assess your current tech. stack and 
          activities and craft a roadmap to elevate your company's SLAs with
          your clients. Conducted over a full day, it can be facilitated remotely
          or in-person. It's an amazing opportunity for us to test our partnership’s
          fit and build the foundations of working together. A typical agenda might
          encompass:
        </p>

        <ul>
          <li>Audit your current tech. stack</li>
          <li>Analyze customer pain points</li>
          <li>Plan for where you want to be in future</li>
          <li>Focus on cash cows and reverse engineer</li>
          <li>Quantify gaps in the market and its value</li>
          <li>Information is key but action is king</li>
          <li>Resources and their backups</li>
          <li>Overview of sales tools (CRM, automation tools, etc.)</li>
          <li>Compliance and related knowledge</li>
          <li>Motivating and incentivizing the tech. team</li>
          <li>Future and why eco-friendly systems are a must!</li>
          <li>Measuring and analyzing SLA metrics</li>
          <li>Hiring and onboarding sales professionals</li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesApproach;
