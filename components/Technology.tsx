import Image from "next/image";
import React from "react";

const Sales = () => {
  return (
    <section className="mb-10 background-img py-[60px] px-4 ">
      <div className="container md:mx-auto md:flex justify-between items-center">
        <div className="md:max-w-[50%] flex flex-col items-start justify-start md:gap-9">
          <span className="text-[#59b1f3] uppercase px-6 py-3 text-lg font-bold leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]">
            Fractional CTO
          </span>
          <p className="mt-8 mb-16 text-lg leading-[140%] md:text-2xl md:leading-[140%] md:mt-0 md:mb-6">
            As a Fractional CTO, I can help you accelerate your million-dollar
            idea into motion. Gone are the days of assembling teams of 10s / 100s
            of professionals. With one super-human inspired technologist, you can
            get to your dreams in (much) less time that you expected.
          </p>
        </div>

        <Image
          src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65372cd6c3d6faf08e7cddcb_Mask%20group.png"
          loading="lazy"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Sales;
