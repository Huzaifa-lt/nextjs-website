import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="mb-10 background-img py-[60px] px-4 md:py-24 md:px-[30px]">
      <div className="container md:mx-auto md:flex justify-between items-center">
        <Image
          src="/Experience.jpg"
          loading="lazy"
        
          data-w-id="7e3faa96-da47-390e-c796-50a8a5359d08"
          alt=""
          width={400}
          height={400}
        />
        <div className="md:max-w-[50%] flex flex-col items-start justify-start md:gap-9">
          <span className="text-[#EC8B5D]  uppercase px-6 py-3 text-lg font-bold leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]  ">
            Experience
          </span>

          <p className="mt-8 mb-10 para-typography md:mt-0 md:mb-6">
            With more than a decade of working with $1B worth companies, I&apos;ve
            honed developing products and services across Australia, APAC and
            the US. From a simple integration of two realtime SaaS systems to
            developing end-to-end Artificial Intelligent bots sometimes built
            using AI tools themselves, I can make the magic happen. I&apos;m mostly
            passionate about early-stage startups willing to take the leap to
            aim for the stars!<br />
            <br />
            As a Fractional CTO, I can accelerate your ideas to launch at the
            global scale! Talk to me about bringing your notes into real-life
            software that scales with your sales team and returns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
