import React from "react";

const AboutPage = () => {
  const ourPoints = [
    {
      title: "Dependability",
      description:
        "Dependability is at the core of everything we do. We know that your vehicle's performance and your peace of mind depend on the reliability of the parts and services you receive. That's why we are committed to providing consistent, high-quality products and exceptional customer service you can trust.",
    },
    {
      title: "Affordability",
      description:
        "We believe that quality auto parts and services shouldn't break the bank. Affordability is a key pillar of our mission, and we are dedicated to providing top-notch products and services at prices that fit your budget.",
    },
    {
      title: "Availability",
      description:
        "We understand the importance of having the right auto parts and services available when you need them. That's why we prioritize availability, ensuring you have access to a comprehensive range of high-quality products and expert services whenever you need them.",
    },
  ];

  const features = [
    "Free shipping on all orders over $75",
    "Tested & proven before any product lands on our shelves, it's thoroughly tested",
    "Customer service available 24/7",
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
            People with a passion for auto parts,{" "}
            <br className="hidden md:block" /> service & relationships
          </p>
        </div>
      </div>

      {/* we understand cars */}
      <main className="px-5 py-10 md:p-20 lg:px-32 xl:px-40">
        <div className="grid gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-body section-heading">
            We Understand Cars
          </h1>
          <p className="text-lg md:text-xl text-justify text-text-body xl:max-w-[60%]">
            At Magestartz, we are driven by a deep passion for auto parts,
            exceptional service, and building meaningful relationships with our
            customers. Our team of dedicated experts brings extensive knowledge
            and enthusiasm to everything we do, ensuring that your automotive
            needs are met with the highest standards of quality and care.
          </p>
        </div>

        {/* our points */}
        <div className="grid gap-10 mt-10 lg:mt-20 lg:grid-flow-col lg:gap-3">
          {ourPoints.map((point, index) => (
            <div
              key={`point_${index}`}
              className="grid gap-5 border border-primary/30 rounded-xl p-5 bg-muted shadow-brand hover:shadow-accent-glow hover:border-accent/40 transition-all duration-300"
            >
              {/* index marker */}
              <span className="text-accent font-display text-sm tracking-widest uppercase">
                0{index + 1}
              </span>

              {/* title */}
              <h2 className="text-2xl font-heading text-text-body">
                {point.title}
              </h2>

              {/* orange divider */}
              <div className="w-8 h-[2px] bg-accent" />

              {/* description */}
              <p className="text-lg text-text-light">{point.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* one-stop shop banner */}
      <div
        style={{ backgroundImage: "url('/images/about-bg-2.webp')" }}
        className="min-h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <div className="blue-overlay h-full w-full px-6 py-10 md:px-20 lg:px-32 lg:py-40 xl:px-40 grid content-center gap-5 lg:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-secondary xl:w-[60%]">
            A One-Stop Shop for{" "}
            <span className="text-accent">Automotive Enthusiasts</span>
          </h1>

          {/* orange accent rule */}
          <div className="w-12 h-[3px] bg-accent" />

          <p className="text-lg md:text-xl lg:text-2xl text-muted xl:w-[60%]">
            We pride ourselves on being the ultimate one-stop shop for
            automotive enthusiasts. Whether you&#39;re a seasoned car expert or
            just starting your journey, we have everything you need to fuel your
            passion for vehicles. Our extensive selection of high-quality auto
            parts, accessories, and tools ensures that you can find exactly what
            you&#39;re looking for, all in one place. From performance upgrades to
            routine maintenance items, we&#39;ve got you covered.
          </p>

          {/* features list */}
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