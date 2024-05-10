import React from 'react'

const Hero = () => {
  return (
   <section className='hero-section py-[60px] pt-[140px] px-4'>
     <div className='container flex flex-col justify-center items-center gap-8'>
     <h1 className=' text-5xl text-white text-center capitalize font-normal leading-[110%]'><span className="text-span ">I can help you build a scaleable,</span> repeatable B2B sales machine for your rocketship</h1>
     <button className='px-[25px] py-3  text-white bg-[rgba(0,0,0,0)] cursor-pointer border-[2px] border-[rgba(255,255,255,0.16)] rounded-[8px]'>BOOK IT</button>
     </div>
   </section>
  )
}

export default Hero