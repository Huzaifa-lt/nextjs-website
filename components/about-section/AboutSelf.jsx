import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSelf = () => {
  return (
    <section className="mb-10 background-img  py-[60px] px-4 md:py-24 md:px-[30px]  ">
      <div className="container md:mx-auto md:flex justify-between items-center  ">
        <div className="md:max-w-[50%] flex flex-col items-start justify-start md:gap-9">
          <span className="text-[#59b1f3]  uppercase px-6 py-3 text-lg font-bold leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%]  ">
            I'm Sohail from "Quantum Edge"
          </span>

          <p className="mt-8 mb-10 para-typography md:text-2xl md:mt-0 md:mb-6">
            I'll let a very recent review about my super powers and here it goes:<br/><br/>
            "Seasoned CTO with 20 years in AdTech, specializing in real-time analytics
            and AI. Notably, he automated data pipelines for State Farm, saving $2M and
            contributing $10-15M ARR. He has led and mentored diverse global teams,
            collaborating on major RFPs and innovative AI solutions. His key roles include
            Founder/CTO at Quantum Edge, Technical Solutions Consultant at AdLib Media, and
            Senior Director at MediaMath, where he improved project quality by 15% and
            reduced timelines by 20%."
          </p>

          <Link href="">
            <button className="px-[25px] py-3 text-base font-bold uppercase text-white bg-[rgba(0,0,0,0)] cursor-pointer border-[2px] border-[rgba(255,255,255,0.16)] rounded-[8px] transition ease-in-out  md:text-2xl hover:bg-[#59b1f3] hover:border-[#59b1f3]">
              Let's do it
            </button>
          </Link>
        </div>

        <Image
          src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/651f64bec38fa448e831fd74_Mask%20group.png"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutSelf;
