import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-section opacity-100 py-[60px] pt-[140px] px-4 md:pb-[132px] md:pt-[184px]">
      <div className="container flex flex-col justify-center items-center gap-8 md:mx-auto md:gap-10">
        <h1 className="text-5xl text-white text-center uppercase font-Anton font-normal leading-[110%] md:max-w-[940px] md:text-8xl md:leading-[110%]">
          <span className="text-span">We can help you build scaleable, </span>
           <p>AI / Web3 / Quantum</p> solution in a record time
        </h1>
        <Link href="/contact">
          <button className="px-[25px] py-3 text-base font-bold text-white bg-[rgba(0,0,0,0)] cursor-pointer border-[2px] border-[rgba(255,255,255,0.16)] rounded-[8px] transition ease-in-out md:text-2xl hover:bg-[#59b1f3] hover:border-[#59b1f3]">
            BOOK IT
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
