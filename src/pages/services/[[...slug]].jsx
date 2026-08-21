import { usePathname } from "next/navigation";
import React from "react";
import { services } from "@/data/staticData";
import Image from "next/image";

const Services = () => {
  const pathname = usePathname();
  const service_name = pathname?.split("/")[2];
  const service = services.find((s) => s.slug === service_name) || services[0];

  return (
    <section>
      {/* hero banner */}
      <div
        style={{
          backgroundImage: `url('${service?.image || ""}')`,
        }}
        className="h-[40vh] bg-cover bg-no-repeat bg-center bg-primary"
      >
        <div className="blue-overlay h-full w-full p-6 md:px-20 lg:px-32 xl:px-40 grid content-center gap-5 lg:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-secondary capitalize">
            {service?.title}
          </h1>
          {/* orange accent rule */}
          <div className="w-12 h-[3px] bg-accent" />
          <p className="text-lg md:text-xl lg:text-2xl text-muted capitalize md:max-w-[60%] xl:max-w-[40%]">
            {service?.subTitle}
          </p>
        </div>
      </div>

      {/* content */}
      <div className="px-5 py-10 md:p-20 xl:px-40 grid gap-10 lg:gap-12 xl:gap-20">
        {/* description */}
        <p className="text-lg md:text-xl text-justify text-text-body xl:max-w-[60%]">
          {service?.description}
        </p>

        {/* example section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:place-items-center lg:gap-10 xl:gap-20">
          {/* example image */}
          {service?.image && (
            <div className="w-full aspect-video lg:aspect-[4/5] xl:aspect-video relative rounded-xl overflow-hidden shadow-brand bg-primary/20">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full absolute inset-0"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          )}

          {/* title + points */}
          <div className="grid gap-5">
            {service?.exampleTitle && (
              <h2 className="font-heading text-text-body capitalize text-xl md:text-2xl lg:text-3xl xl:text-4xl section-heading">
                {service.exampleTitle}
              </h2>
            )}

            {service?.examples && (
              <div className="grid gap-4">
                {service.examples.map((example, index) => (
                  <p
                    key={index}
                    className="ul font-medium text-text-body opacity-90 md:text-lg xl:text-xl"
                  >
                    {example}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
