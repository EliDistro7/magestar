import Image from "next/image";
import React from "react";

const MainPoints = ({ src, title, desc }) => {
  return (
    <div className="grid grid-cols-[min-content,1fr] w-fit divide-x-2 divide-accent place-items-center">
      {/* Icon */}
      <div className="w-[50px] aspect-square px-2 grid place-items-center">
        <Image
          src={src}
          alt="icon"
          width={50}
          height={50}
          className="brightness-0 invert opacity-90"
        />
      </div>

      {/* Content */}
      <div className="px-3">
        {/* Title */}
        <p className="font-medium text-secondary">{title}</p>
        {/* Desc */}
        <p className="text-[0.9rem] font-light text-secondary/60">{desc}</p>
      </div>
    </div>
  );
};

export default MainPoints;