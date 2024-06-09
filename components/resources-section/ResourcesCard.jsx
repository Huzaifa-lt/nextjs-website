import Image from "next/image";
import React from "react";

const ResourcesCard = ({ imageSrc, title, detail }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-[837px]">
      <div className="">
        <Image
          src={imageSrc}
          loading="lazy"
          className=""
          alt="title"
          width={380}
          height={254}
        />
      </div>
      <div>
        <h6 className="card-title">{title}</h6>

        <p className="mb-6 para-typography">{detail}</p>
      </div>
    </div>
  );
};

export default ResourcesCard;
