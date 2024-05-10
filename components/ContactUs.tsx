import React from 'react'
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea"



const ContactUs = () => {
  return (
    <section className="py-[60px]  bg-[rgba(0,0,0,0)] ">
     <div className='container'>
        <div className=' pt-10 px-6 pb-6 max-w-[700px] bg-[rgba(255,255,255,.02)] text-white border-[2px] border-[rgba(255,255,255,.08)] rounded-2xl'>
            <button className=" mb-6 text-[#59b1f3] text-center block mx-auto capitalize px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] font-bold ">Contact</button>
             
             <div className=' mb-6'>
                <h6 className=' mb-[18px] text-lg leading-[140%] text-white font-normal '>Your Name</h6>
                <Input className='border-[rgba(255,255,255,0.08)]' />
             </div>
             <div className=' mb-6'>
                <h6 className=' mb-[18px] text-lg leading-[140%] text-white font-normal '>Your Email</h6>
                <Input className='border-[rgba(255,255,255,0.08)]' />
             </div>
             <div className=' mb-6' >
                <h6 className=' mb-[18px] text-lg leading-[140%] text-white font-normal '>Your Message</h6>
                <Textarea className='border-[rgba(255,255,255,0.08)] rounded-[8px]' placeholder='Type your message' />

             </div>
              
              <button className=' py-5 px-10 text-lg w-full leading-[140%] bg-[rgba(255, 255, 255, .02)] border-[2px] border-[rgba(255,255,255,0.08)] rounded-[8px] '>Send Message</button>
 
        </div>
     </div>
    </section>
  )
}

export default ContactUs