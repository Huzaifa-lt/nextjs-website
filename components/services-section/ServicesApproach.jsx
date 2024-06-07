import Image from "next/image";
import React from "react";

const ServicesApproach = () => {
  return (
    <section className="background-img">
      <div className="container section-wrapper md:mx-auto">
        <div className="img-wrapper flex flex-col justify-start items-start gap-2 md:gap-4">
          <h2>Approach</h2>
          <Image
            src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/651ed2c729186d529f253369_2.png"
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-2  content-wrapper md:gap-4 ">
          <span className="mb-6 text-[#59b1f3] text-center font-bold uppercase px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%] ">
            Sales and GTM Strategy Workshop $3,950 exc GST.
          </span>
          <p className="mb-6 text-lg leading-[140%]">
            This workshop is designed to assess your current sales activities
            and craft a roadmap to elevate sales performance. Conducted
            over half a day, it can be facilitated remotely or in-person.
            It's an opportunity for us to test our partnership’s fit and
            build the foundations of working together. A typical agenda might
            encompass:
          </p>

          <ul>
            <li>Market segmentation and targeting</li>
            <li>Identifying your ideal customer profile</li>
            <li>Understanding customer pain points</li>
            <li>Crafting a unique selling proposition (USP)</li>
            <li>Differentiating from competitors</li>
            <li>Mapping the sales funnel</li>
            <li>Defining key stages in the sales process</li>
            <li>Overview of sales tools (CRM, automation tools, etc.)</li>
            <li>Measuring and analyzing sales metrics</li>
            <li>Hiring and onboarding sales professionals</li>
            <li>Ongoing training and development</li>
            <li>Motivating and incentivizing the sales team</li>
            <li>Setting sales goals and targets</li>
            <li>Developing a sales action plan</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesApproach;
