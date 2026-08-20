import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const Services = () => {
  const pathname = usePathname();
  const service_name = pathname?.split("/")[2];
  const [service, setService] = useState();
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    const fetchService = async () => {
      const serv = await client.fetch(
        `*[_type == "services" && slug.current == $slug]{
          title,
          subTitle,
          "slug": slug.current,
          "image": serviceImage,
          serviceDescription,
          serviceExampleImage,
          serviceExampleTitle,
          serviceExamples
        }`,
        { slug: service_name }
      );
      setService(serv[0]);
    };

    if (service_name) fetchService();
  }, [service_name]);

  return (
    <section>
      {/* hero banner */}
      <div
        style={{
          backgroundImage: `url('${
            service?.image ? builder.image(service.image).url() : ""
          }')`,
        }}
        className="h-[40vh] bg-cover bg-no-repeat bg-center"
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
          {service?.serviceDescription}
        </p>

        {/* example section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:place-items-center lg:gap-10 xl:gap-20">
          {/* example image */}
          {service?.serviceExampleImage && (
            <div className="w-full aspect-video lg:aspect-[4/5] xl:aspect-video relative rounded-xl overflow-hidden shadow-brand">
              <Image
                src={builder.image(service.serviceExampleImage).url()}
                alt="example repair"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* title + points */}
          <div className="grid gap-5">
            {service?.serviceExampleTitle && (
              <h2 className="font-heading text-text-body capitalize text-xl md:text-2xl lg:text-3xl xl:text-4xl section-heading">
                {service.serviceExampleTitle}
              </h2>
            )}

            {service?.serviceExamples && (
              <div className="grid gap-4">
                {service.serviceExamples.map((example, index) => (
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