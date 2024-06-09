import React from "react";
import ResourcesCard from "./ResourcesCard";
import Link from "next/link";

const CardWrapper = () => {
  return (
    <section className="py-[60px] resources-bg-img">
      <div className="container card-wrapper md:mx-auto">
        <Link href="">
          <ResourcesCard
            imageSrc="/QE-Resource1.jpeg"
            title="Scalability, Sustainability and Survivability: where Quantum will hold its Edge"
            detail=""
          />
        </Link>
        <Link href="">
          <ResourcesCard
            imageSrc="/QE-Resource2.jpeg"
            title="Web3.0 is making a come-back at the speed of Light"
            detail=""
          />
        </Link>
        <Link href="">
          <ResourcesCard
            imageSrc="/QE-Resource3.jpeg"
            title="AI rules the Tech World"
            detail=""
          />
        </Link>
      </div>
    </section>
  );
};

export default CardWrapper;
