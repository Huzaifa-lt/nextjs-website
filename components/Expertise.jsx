import Image from "next/image";
import React from "react";

const Expertise = () => {
  return (
    <section className="mb-10 background-img py-[60px] px-4 ">
      <div className="container">
        <button className="text-[#59b1f3] capitalize px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] ">
          Expertise
        </button>
        <p className=" mt-8 mb-10 text-lg leading-[140%] ">
          I am a 20-year technology B2B sales veteran (god that makes me feel
          old), founder, builder, nocoder and automation fan, which you can
          access as a Fractional VP Sales.
        </p>

        <div className="max-w-[500px] bg-blue-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            voluptatum sint ad reiciendis est obcaecati at cumque quia
            voluptate, voluptatibus consequatur facilis cupiditate magnam?
            Deleniti quis sapiente ducimus. Amet eos itaque possimus veniam
            voluptatum officia dignissimos dolorem dolore commodi perferendis in
            libero tempore cumque illum, voluptatem accusantium accusamus sequi?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
