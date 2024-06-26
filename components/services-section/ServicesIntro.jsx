import Image from "next/image";
import React from "react";

const ServicesIntro = () => {
  return (
    <section className="background-img">
      <div className="container section-wrapper md:mx-auto ">
        <div className=" mb-10 content-wrapper">
          <p className=" mb-6 text-lg leading-[140%] para-typo">
            As a Fractional VP Sales I work ‘inside the tent’ as part of the
            exec leadership team. This means that I have an email, a
            &nbsp;title, &nbsp;access and availability on all of your systems
            including Slack, Zoom even Teams! &nbsp;Any intellectual property
            created during our engagement is fully owned by your business. By
            working as a member of your team, I ensure that sales strategies are
            implemented effectively, communication flows smoothly, and we
            achieve your business goals together.
          </p>
        </div>
        <div className="img-wrapper">
          <Image
            src="https://assets-global.website-files.com/651ce31eb5c6123602f87af4/651eca325e1d6043d43e716d_Image%20(2).png"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
