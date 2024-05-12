import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="section footer py-[60px] pb-20 md:py-[132px] ">
      <div className=" container flex flex-col gap-8 items-stretch justify-between relative z-10 md:mx-auto">
        <div>
          <h5 className=" text-[64px] font-normal leading-[110%] text-center font-Anton text-white capitalize md:text-[240px] ">
            zachary<span className="king md:text-[240px]">king</span>
          </h5>
          <div className="flex flex-col gap-4 items-center md:gap-8">
            <div className=" mt-9 flex flex-wrap  gap-2  md:gap-4">
              <a
                href="/"
                className=" py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,0.08)] rounded-[8px] self-center"
              >
                Home
              </a>
              <a
                href="/"
                className=" py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] rounded-[8px]"
              >
                about
              </a>
              <a
                href="/"
                className=" py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] rounded-[8px]"
              >
                Services
              </a>
              <a
                href="/"
                className=" py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] rounded-[8px]"
              >
                Resources
              </a>
              <a
                href="/"
                className=" py-2 px-4 text-xl text-white uppercase cursor-pointer bg-[rgba(89,177,243,.08)] 
            rounded-[8px]"
              >
                Contact
              </a>
            </div>
            <p>I've sold things you wouldn't believe...</p>
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
