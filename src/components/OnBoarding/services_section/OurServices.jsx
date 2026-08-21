import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/staticData";

const OurServices = () => {
  return (
    <section
      id="ourservices"
      className="py-14 lg:py-24 bg-dark relative z-10 overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-[3px]
                      bg-gradient-to-r from-accent via-accent/40 to-transparent" />

      {/* Section header — padded, not the cards */}
      <div className="px-5 md:px-10 mb-10 lg:mb-14
                      flex items-end justify-between">
        <div>
          {/* Index marker — structural label */}
          <span className="block text-accent font-bold tracking-[0.2em]
                           text-xs uppercase mb-3">
            01 — Services
          </span>
          <p className="text-4xl font-bold lg:text-5xl text-secondary
                        tracking-tight leading-[1.05]">
            Our Services
          </p>
        </div>

        {/* Decorative rule */}
        <div className="hidden md:block h-[1px] flex-1 mx-10
                        bg-gradient-to-r from-accent/50 to-transparent" />
      </div>

      {/* Cards grid — NO horizontal padding on mobile = edge-to-edge */}
      <div className="grid grid-cols-1 gap-[2px]
                      sm:grid-cols-2 sm:gap-4 sm:px-5
                      xl:grid-cols-4 md:px-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            src={service.image}
            href={"/services/" + service.slug}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;