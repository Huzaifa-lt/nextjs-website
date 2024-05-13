import Image from "next/image";
import React from "react";

const Expertise = () => {
  return (
    <section className="mb-10 background-img  py-[60px] px-4 md:py-24 md:px-[30px]  ">
      <div className="container md:mx-auto md:flex justify-between items-center  ">
        <div className=" md:max-w-[50%] flex flex-col items-start justify-start md:gap-9">
          <span className="text-[#59b1f3]  uppercase px-6 py-3 text-lg font-bold leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]  ">
            Expertise
          </span>

          <p className=" mt-8 mb-10 para-typography md:mt-0 md:mb-6  ">
            I am a 20-year technology B2B sales veteran (god that makes me feel
            old), founder, builder, nocoder and automation fan, which you can
            access as a Fractional VP Sales.
          </p>
        </div>

        <img
          src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65372e589fb1ae50f880778f_Mask%20group%20(2).png"
          loading="lazy"
          data-w-id="7e3faa96-da47-390e-c796-50a8a5359d08"
          alt=""
        />
      </div>
    </section>
  );
};

export default Expertise;
