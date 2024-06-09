import React from "react";
import Image from "next/image";

const FractionalTechnology= () => {
  return (
    <section className="background-img">
      <div className="container section-wrapper md:mx-auto">
        <div className="mb-10 img-wrapper">
          <Image
            src="/QE-Service2.avif"
            loading="lazy"
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-2 content-wrapper md:gap-4">
          <span className="mb-6 text-[#EC8B5D] text-center font-bold uppercase px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]">
            Fractional CTO - $10,000 excl GST per month
          </span>
          <p className="mb-6 text-lg leading-[140%]">
            Thinking about a VP Product / Engineering but it’s too early or can’t afford one?
            Get access to a 20yr technology specialist to help supercharge your ideas come alive
          </p>

          <ul className="">
            <li>Tech. activities and cost review</li>
            <li>Strategy and goals for next six months</li>
            <li>Hiring and setting performance metrics</li>
            <li>Messaging and channel review</li>
            <li>Realtime review of your public info. portal</li>
            <li>Dedicated one day per week collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FractionalTechnology;
