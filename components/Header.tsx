import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-[rgba(0 ,0 , 0, 0)] opacity-100  fixed w-full backdrop:blur-[32px] ">
      <nav className=" px-3 py-5 bg-[#ddd]  bg-[rgba(0 ,0 , 0, 0)]  relative flex justify-between items-center" style={{backgroundColor : "rgba(0 ,0 , 0, 0)"}} >
        <a href="">
          <Image
            src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/65279aef2546312f94725dd9_Logo.svg"
            alt=""
           width={130}
           height={44}
          />
        </a>

        <Image src='https://assets-global.website-files.com/651ce31eb5c6123602f87af4/651fbacc37126bf6e17296be_menu-2(24x24)%402x.svg' alt="" width={40} height={40}/>
      </nav>
    </header>
  );
};

export default Header;
