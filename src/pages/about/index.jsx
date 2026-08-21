import React from "react";

const AboutPage = () => {
  const ourPoints = [
    {
      title: "Specialization",
      description:
        "At Magestar, we believe in the importance of specialization and commitment. We continuously strive to deliver tailored and effective solutions that ensure optimal performance and long-term energy efficiency across HVAC, mining, procurement, and beyond.",
    },
    {
      title: "Global Network",
      description:
        "Our global outlook and network — spanning Africa, Europe, North America, the Middle East, Asia, and Australia — give us the flexibility to source quality products and meet the needs of small-to-medium enterprises just as effectively as the largest corporates.",
    },
    {
      title: "Reliability",
      description:
        "To us, each customer — no matter the size — is an asset to our organization and is treated as such. Our goal is to offer timely delivery of quality goods and services, reliably. We are an independent, owner-managed organization with a national footprint.",
    },
  ];

  const features = [
    "24-hour emergency call-out response",
    "OTIF — On Time In Full delivery commitment",
    "100% client satisfaction goal across all engagements",
  ];

  return (
    <section className="min-h-screen">
      {/* hero banner */}
      <div
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        className="h-[40vh] bg-dark bg-cover bg-no-repeat bg-center"
      >
        <div className="blue-overlay h-full w-full p-6 md:px-20 lg:px-32 xl:px-40 grid content-center gap-5 lg:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-secondary">
            About Us
          </h1>
          {/* orange accent rule */}
          <div className="w-12 h-[3px] bg-accent" />
          <p className="text-lg md:text-xl lg:text-2xl text-muted">
            Versatile solutions. Trusted distribution.{" "}
            <br className="hidden md:block" /> Engineering excellence.
          </p>
        </div>
      </div>

      {/* About body */}
      <main className="px-5 py-10 md:p-20 lg:px-32 xl:px-40">
        <div className="grid gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-body section-heading">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-justify text-text-body xl:max-w-[60%]">
            Magestar Company Limited is a registered business in the Republic of
            Tanzania, based in Mwanza with a national footprint. We deal with
            civil works spare parts, mechanical consultancy, and importation of
            machinery parts and equipment. Our client base includes mining
            industries, corporate organizations, government entities, NGOs, and
            private individuals.
          </p>
        </div>

        {/* our points */}
        <div className="grid gap-10 mt-10 lg:mt-20 lg:grid-flow-col lg:gap-3">
          {ourPoints.map((point, index) => (
            <div
              key={`point_${index}`}
              className="grid gap-5 border border-primary/30 rounded-xl p-5 bg-muted shadow-brand hover:shadow-accent-glow hover:border-accent/40 transition-all duration-300"
            >
              <span className="text-accent font-display text-sm tracking-widest uppercase">
                0{index + 1}
              </span>
              <h2 className="text-2xl font-heading text-text-body">
                {point.title}
              </h2>
              <div className="w-8 h-[2px] bg-accent" />
              <p className="text-lg text-text-light">{point.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* mission banner */}
      <div
        style={{ backgroundImage: "url('/images/about-bg-2.webp')" }}
        className="min-h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <div className="blue-overlay h-full w-full px-6 py-10 md:px-20 lg:px-32 lg:py-40 xl:px-40 grid content-center gap-5 lg:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-secondary xl:w-[60%]">
            Our Mission &{" "}
            <span className="text-accent">Vision</span>
          </h1>
          <div className="w-12 h-[3px] bg-accent" />
          <p className="text-lg md:text-xl lg:text-2xl text-muted xl:w-[60%]">
            To deliver efficient, reliable HVAC solutions with quality and
            precision — and to be the first choice in providing HVAC services
            and solutions across the Republic of Tanzania, supporting Tanzania&apos;s
            Vision 2030.
          </p>
          <div className="grid gap-5 mt-10">
            {features.map((f, index) => (
              <p
                className="ul text-lg font-medium text-secondary lg:text-xl"
                key={`feature_${index}`}
              >
                {f}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
