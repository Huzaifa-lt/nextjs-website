import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactUs = () => {
  return (
    <section className="py-[60px]  bg-[rgba(0,0,0,0)] ">
      <div className="container md:mx-auto ">
        <div className=" pt-10 px-6 pb-6 max-w-[700px] mx-auto bg-[rgba(255,255,255,.02)] text-white border-[2px] border-[rgba(255,255,255,.08)] rounded-2xl md:pt-16 md:px-10 md:pb-14">
          <span className=" mb-6 text-[#59b1f3] w-fit text-center block mx-auto uppercase px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] font-bold md:text-2xl md:leading-[140%] md:mb-14  ">
            Contact
          </span>

          <div className=" mb-6">
            <h6 className=" mb-[18px]  text-lg leading-[140%] text-white font-normal md:text-2xl  ">
              Your Name
            </h6>
            <Input className="border-[rgba(255,255,255,0.08)] min-h-12 md:min-h-14" />
          </div>
          <div className=" mb-6">
            <h6 className=" mb-[18px] text-lg leading-[140%] text-white font-normal md:text-2xl ">
              Your Email
            </h6>
            <Input className="border-[rgba(255,255,255,0.08)] min-h-12 md:min-h-14" />
          </div>
          <div className=" mb-6">
            <h6 className=" mb-[18px] text-lg leading-[140%] text-white font-normal md:text-2xl ">
              Your Message
            </h6>
            <Textarea
              className=" p-6 min-h-36  border-[rgba(255,255,255,0.08)] rounded-[8px] md:min-h-[150px] "
              placeholder="Type your message"
            />
          </div>

          <button className=" py-5 px-10 text-lg font-medium first-letter uppercase w-full leading-[140%] bg-[rgba(255, 255, 255, .02)] border-[2px] border-[rgba(255,255,255,0.08)]  bg-[rgba(255,255,255,.02)] rounded-[8px] transition ease-in-out hover:bg-[#59b1f3] hover:border-[#59b1f3] md:text-2xl ">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
