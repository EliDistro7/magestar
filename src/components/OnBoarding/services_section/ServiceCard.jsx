import Link from "next/link";
import React from "react";

const ServiceCard = ({ src, title, href }) => {
  return (
    <Link href={href} className="block w-full group">
      {/* Full-bleed image container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden
                      sm:rounded-lg">
        <img
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover
                     transition-all duration-700
                     group-hover:scale-105 group-hover:brightness-75"
        />

        {/* Permanent dark scrim at bottom — always visible for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/5
                        bg-gradient-to-t from-black/80 to-transparent" />

        {/* Orange left-border accent — slides in on hover */}
        <div className="absolute top-0 left-0 h-full w-[3px]
                        bg-accent scale-y-0 group-hover:scale-y-100
                        transition-transform duration-500 ease-out origin-bottom" />

        {/* Title pinned to bottom of image */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-5
                        sm:px-5 sm:pb-6">
          <p className="text-secondary font-bold uppercase tracking-[0.12em]
                        text-sm leading-tight
                        transition-colors duration-300 group-hover:text-accent">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;