"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  function handleClick() {
    setShowNavbar((prevValue) => !prevValue);
  }

  return (
    <header className=" bg-[rgba(0 ,0 , 0, 0)] opacity-100  fixed w-full backdrop:blur-[32px] ">
      <nav
        className=" container  py-5 bg-[#ddd]  bg-[rgba(0 ,0 , 0, 0)]  relative flex justify-between items-center md:mx-auto "
        style={{ backgroundColor: "rgba(0 ,0 , 0, 0)" }}
      >
          {showNavbar &&  <div  className={`transition-transform transform ${
            showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } w-72 mx-auto bg-white flex flex-col items-center justify-center rounded-xl absolute top-full left-0 right-0`}>
          <Link
            href="/"
            aria-current="page"
            className=" py-5 text-[#000] text-2xl uppercase "
          >
           Home
          </Link>
          <Link href="/about"  className=" py-5 text-[#000] text-2xl uppercase ">
           About
          </Link>
          <Link href="/services"  className=" py-5 text-[#000] text-2xl uppercase ">
            Services
          </Link>
          <Link href="/resources"  className=" py-5 text-[#000] text-2xl uppercase ">
            Resources
          </Link>
          <Link href="/contact"  className=" py-5 text-[#000] text-2xl uppercase ">
        Contact
          </Link>
        </div> }

       
        <a href="" className=" md:hidden">
          <Image
            src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65279aef2546312f94725dd9_Logo.svg"
            alt=""
            width={130}
            height={44}
          />
        </a>

        <div className=" hidden   md:flex gap-10 justify-self-start">
          <Link
            href="/"
            className=" text-2xl text-white uppercase leading-[140%]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className=" text-2xl text-white uppercase leading-[140%]"
          >
            About
          </Link>
          <Link
            href="/services"
            className=" text-2xl text-white uppercase leading-[140%]"
          >
            Services
          </Link>
        </div>
        <Link href="/" className=" hidden md:block">
          <Image
            src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65279aef2546312f94725dd9_Logo.svg"
            alt=""
            width={130}
            height={44}
          />
        </Link>
        <div className=" hidden justify-self-end items-center  md:flex gap-10">
          <Link
            href="/resources"
            className=" text-2xl text-white uppercase leading-[140%]"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className=" text-2xl overflow-hidden text-white uppercase leading-[140%] flex items-center gap-[6.4px]"
          >
            <div className=" parent-div overflow-hidden h-[30px] text-2xl text-white uppercase leading-[140%] flex flex-col justify-items-start items-center ">
              <h6 className=" min-h-[30px] flex items-center justify-center btn-animation    ">
                Contact
              </h6>

              <h6 className="  min-h-[30px] flex items-center justify-center  btn-animation ">
                Contact
              </h6>
            </div>

            <span className=" w-5 h-5 text-white block">
              <svg
                className="w-full self-end"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </Link>
        </div>

        {/* <div className="hidden md:flex items-center justify-between">
       
          <div className="flex gap-10 justify-self-start">
            <a
              href="/"
              className=" text-2xl text-white uppercase leading-[140%]"
            >
              Home
            </a>
            <a
              href="/"
              className=" text-2xl text-white uppercase leading-[140%]"
            >
              About
            </a>
            <a
              href="/"
              className=" text-2xl text-white uppercase leading-[140%]"
            >
              Services
            </a>
          </div>
          <a href="">
            <Image
              src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65279aef2546312f94725dd9_Logo.svg"
              alt=""
              width={130}
              height={44}
            />
          </a>
          <div className=" justify-self-end flex gap-10" >
            <a
              href="/"
              className=" text-2xl text-white uppercase leading-[140%]"
            >
              Resources
            </a>
            <a
              href="/"
              className=" text-2xl text-white uppercase leading-[140%] flex items-center gap-[6.4px]"
            >
              Contact{" "}
              <span className=" w-5 h-5 text-white block">
                <svg
                  className="w-full self-center"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div> */}

        <Image
          src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/651fbacc37126bf6e17296be_menu-2(24x24)%402x.svg"
          alt=""
          width={40}
          height={40}
          onClick={handleClick}
          className="md:hidden"
        />
      </nav>
    </header>
  );
};

export default Header;
