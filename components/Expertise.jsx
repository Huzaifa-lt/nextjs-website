import Image from "next/image";
import React from "react";

const Expertise = () => {
  return (
    <section className="mb-10 background-img  py-[60px] px-4 md:py-24 md:px-[30px]  ">
      <div className="container md:mx-auto md:flex justify-between items-center  ">
        <div className="md:max-w-[50%] flex flex-col items-start justify-start md:gap-9">
          <span className="text-[#EC8B5D]  uppercase px-6 py-3 text-lg font-bold leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]  ">
            Expertise
          </span>

          <p className="mt-8 mb-10 para-typography md:mt-0 md:mb-6">
            We are your global technology experts specializing in diverse expertise
            and unique business acumen. Over the years, the art to quickly bring an
            idea to life is what we excel at. Talk to us and see how we can make it
            happen!
          </p>
        </div>

        <Image
          src="https://d12852wca2dyvw.cloudfront.net/Expertise.jpg"
          loading="lazy"
          data-w-id="7e3faa96-da47-390e-c796-50a8a5359d08"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default Expertise;
