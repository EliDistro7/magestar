import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/staticData";

const OurServices = () => {

  return (
    <section
      id="ourservices"
      className="px-5 py-14 grid gap-12 lg:py-24 z-10 bg-dark relative overflow-hidden"
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent via-accent/40 to-transparent" />

      {/* Header */}
      <div className="flex flex-col justify-center items-start gap-2 md:flex-row md:items-center md:justify-between md:px-10">
        {/* Title with orange underline accent */}
        <div>
          <p className="text-3xl font-semibold lg:text-4xl text-secondary tracking-tight">
            Our Services
          </p>
          {/* Orange underline — Magestar signature */}
          <span className="block mt-2 w-12 h-[3px] bg-accent rounded-full" />
        </div>

        {/* Optional: View All button (uncomment to use) */}
        {/* <Button inverse={true} className={"px-10"}>View All Services</Button> */}
      </div>

      {/* Service Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 place-items-start md:px-10">
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