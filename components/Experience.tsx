import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="mb-10 background-img py-[60px] px-4 md:py-24 md:px-[30px]  ">
      <div className="container md:mx-auto lg:flex justify-between items-center">
        <Image
          src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65372e589fb1ae50f880778f_Mask%20group%20(2).png"
          loading="lazy"
          className=" max-w-[50%]"
          data-w-id="7e3faa96-da47-390e-c796-50a8a5359d08"
          alt=""
          width={500}
          height={500}
        />

        <div className=" md:max-w-[48%] flex flex-col justify-items-start items-start md:gap-9 " >
          <span className="text-[#59b1f3] text-center font-bold uppercase px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%] ">
            Experience
          </span>

          <p className=" mt-16 mb-10 para-typography md:text-2xl md:leading-[140%] md:mt-0 md:mb-6 ">
            With more than a decade at VC-backed startups + scale ups I’ve
            launched and sold new products and services across Australia, APAC
            and the US. I’ve built and run teams through direct, JVs or
            partnership models.&nbsp;I’m most passionate about early-stage,
            high-growth startups. <br />
            <br />
            As a Fractional VP Sales I can help with anything from go-to-market
            strategy, getting hands-on building outreach campaigns, or team
            development, to pipeline reviews, sales strategy, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
