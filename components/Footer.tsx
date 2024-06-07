import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="section footer py-[60px] pb-10 md:pt-[132px] md:pb-20">
      <div className="container flex flex-col gap-8 items-stretch justify-between relative z-10 md:mx-auto">
        <div>
          <div className="flex-shrink-0 basis-auto flex items-center justify-center">
             <h5 className="text-[64px] font-normal leading-[110%] font-Anton text-white uppercase sm:text-[12vh] md:text-[18vh] lg:text-[25vh] 2xl:text-[240px]">
            Quantum<span className="king text-[64px] sm:text-[12vh] md:text-[18vh] lg:text-[25vh] 2xl:text-[240px]">Edge</span>
          </h5>
          </div>
         
          <div className="flex flex-col gap-4 items-center md:gap-8">
            <div className="mt-9 flex flex-wrap gap-2 md:gap-4">
              <Link
                href="/"
                className="py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,0.08)] rounded-[8px] self-center md:py-3 md:px-6 transition ease-in-out hover:bg-[#59b1f3] hover:border-[#59b1f3]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] rounded-[8px] md:py-3 md:px-6 transition ease-in-out hover:bg-[#59b1f3] hover:border-[#59b1f3]"
              >
                about
              </Link>
              <Link
                href="/services"
                className="py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] rounded-[8px] md:py-3 md:px-6 transition ease-in-out hover:bg-[#59b1f3] hover:border-[#59b1f3]"
              >
                Services
              </Link>
              <Link
                href="/resources"
                className="py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] rounded-[8px] md:py-3 md:px-6 transition ease-in-out hover:bg-[#59b1f3] hover:border-[#59b1f3]"
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] 
            rounded-[8px] transition ease-in-out md:py-3 md:px-6 hover:bg-[#59b1f3] hover:border-[#59b1f3]"
              >
                Contact
              </Link>
            </div>
            <p className="text-xl leading-[140%]">Quantum Edge can serve 130 Billion Events <br/> per Month per Server 🚀 (FREE FOR A YEAR)</p>

            <div className="flex items-center gap-2 md:gap-4">
              <Link href="">
                <Image
                  src="https://assets-global.website-files.com/5dc719aec19d43ddb8fee2f9/651e2a58864e28fbffefb2db_Vectors-Wrapper.svg"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                />
              </Link>
              <Link href="">
                <Image
                  src="https://assets-global.website-files.com/5dc719aec19d43ddb8fee2f9/651e022750f473558d6a0d0c_Vectors-Wrapper.svg"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
