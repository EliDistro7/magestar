import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ src, title, href }) => {
  return (
    <Link href={href} className="grid gap-4 place-items-center w-full group">
      {/* Image with Magestar-style blue overlay on hover */}
      <div className="w-[80%] h-[400px] lg:w-[300px] xl:w-full xl:max-w-[400px] xl:h-[500px] overflow-hidden relative rounded-lg">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
        />
        {/* Blue overlay — fades in on hover, matching Magestar's panel treatment */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 rounded-lg" />

        {/* Orange bottom strip — appears on hover */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-accent transition-all duration-500 ease-out" />
      </div>

      {/* Title */}
      <p className="text-xl font-medium capitalize text-secondary transition-all duration-300 group-hover:text-accent">
        {title}
      </p>
    </Link>
  );
};

export default ServiceCard;