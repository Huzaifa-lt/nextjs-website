import React from "react";
import Image from "next/image";

const FractionalSales = () => {
  return (
    <section>
      <div className="container md:mx-auto">
        <div>
          <Image
            src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/651ed2f1deb9fb4cedda2f0d_3.png"
            alt=""
            width={500}
            height={500}
          />
        </div>

        <div>
          <span className="text-[#59b1f3] text-center font-bold uppercase px-6 py-3 text-lg leading-[140%] rounded-[8px] bg-[rgba(255,255,255,.04)] md:text-2xl md:leading-[140%] ">
            Sales and GTM Strategy Workshop $3,950 exc GST.
          </span>
          <p>
            Thinking about a VP Sales but it’s too early or can’t afford one?
            &nbsp; Get access to a 20yr sales veteran to help supercharge your
            sales as a Fractional VP Sales.
          </p>

          <ul>
            <li>Sales strategy, activity and pipeline review</li>
            <li>Deal quarterbacking</li>
            <li>Hiring and Team Performance Management</li>
            <li>Messaging and channel review</li>
            <li>Sales Plan Development</li>
            <li>Dedicated one day per week collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FractionalSales;
