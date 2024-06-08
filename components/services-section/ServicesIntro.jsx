import Image from "next/image";
import React from "react";

const ServicesIntro = () => {
  return (
    <section className="section-wrapper background-img">
      <div className="container md:mx-auto container section-wrapper
        md:mx-auto mb-10 content-wrapper">
        <p className="mb-6 text-lg leading-[140%] para-typo">
          As a Fractional CTO, I work ‘in-house’ as part of the
          Exec. leadership team. This means that I have an email, a
          title, access and availability on all your systems' access
          including Slack, Zoom or even Teams! Any intellectual property
          created during our engagement is fully owned by your business. By
          working as a member of your team, I ensure that tech. strategies are
          implemented effectively, communication flows smoothly, and we
          achieve your business goals faster and more effectively.
        </p>
      </div>
      <div className="img-wrapper">
        <Image
          src="https://d12852wca2dyvw.cloudfront.net/QE-Service1.avif"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ServicesIntro;
