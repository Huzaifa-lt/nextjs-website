import Image from "next/image";
import React from "react";

const Expertise = () => {
  return (
    <section className="mb-10 background-img py-[60px] px-4 ">
      <div className="container md:mx-auto md:flex  ">
        <div>
          <button className="text-[#59b1f3] capitalize px-6 py-3 text-lg font-bold leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl ">
            Expertise
          </button>
          <p className=" mt-8 mb-10 text-lg leading-[140%] md:text-3xl ">
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
