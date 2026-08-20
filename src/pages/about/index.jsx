import React from "react";

const AboutPage = () => {
  const ourPoints = [
    {
      title: "Dependability",
      description:
        "Dependability is at the core of everything we do. We know that your vehicle's performance and your peace of mind depend on the reliability of the parts and services you receive. That's why we are committed to providing consistent, high-quality products and exceptional customer service you can trust. ",
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
    <>
      <section className="min-h-screen">
        {/* top part  */}
        <div
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
          className=" h-[40vh] bg-cover bg-no-repeat bg-center"
        >
          <div className="bg-[#000000a0] h-full w-full p-6 md:px-20 lg:px-32 xl:px-40 grid content-center gap-5 lg:gap-6  text-primary">
            {/* title  */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
              About Us
            </h1>
            {/* sub title  */}
            <p className="text-lg md:text-xl lg:text-2xl">
              People with a passion for auto parts,{" "}
              <br className="hidden md:block" /> service & relationships
            </p>
          </div>
        </div>

        <main className="px-5 py-10 md:p-20 lg:px-32 xl:px-40">
          {/* we understaand cars  */}
          <div className=" grid gap-5 ">
            {/* title  */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
              We Understand Cars
            </h1>

            {/* description  */}
            <p className="text-lg md:text-xl text-justify xl:max-w-[60%]">
              At Magestartz, we are driven by a deep passion for auto parts,
              exceptional service, and building meaningful relationships with
              our customers. Our team of dedicated experts brings extensive
              knowledge and enthusiasm to everything we do, ensuring that your
              automotive needs are met with the highest standards of quality and
              care.
            </p>
          </div>

          {/* our points  */}
          <div className="grid gap-10 mt-10 lg:mt-20 lg:grid-flow-col lg:gap-3">
            {ourPoints.map((point, index) => (
              <div
                key={`point_${index}`}
                className="grid gap-5 border-2 rounded border-black p-5"
              >
                {/* title  */}
                <h1 className="text-2xl font-medium">{point.title}</h1>

                {/* description  */}
                <p className="text-lg">{point.description}</p>
              </div>
            ))}
          </div>
        </main>

        {/* one stopo shop  */}
        <div
          style={{ backgroundImage: "url('/images/about-bg-2.webp')" }}
          className=" min-h-[40vh] bg-cover bg-no-repeat bg-center"
        >
          <div className="bg-[#000000a0] h-full w-full px-6 py-10 md:px-20 lg:px-32 lg:py-40 xl:px-40 grid content-center gap-5 lg:gap-6  text-primary">
            {/* title  */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium xl:w-[60%]">
              A One-Stop Shop for Automotive Enthusiasts
            </h1>
            {/* sub title  */}
            <p className="text-lg md:text-xl lg:text-2xl xl:w-[60%]">
              We pride ourselves on being the ultimate one-stop shop for
              automotive enthusiasts. Whether you&#39; re a seasoned car expert or
              just starting your journey, we have everything you need to fuel
              your passion for vehicles. Our extensive selection of high-quality
              auto parts, accessories, and tools ensures that you can find
              exactly what you&#39;re looking for, all in one place. From
              performance upgrades to routine maintenance items, we&#39;ve got you
              covered.
            </p>

            {/* main points  */}
            <div className="grid gap-5 mt-10">
              {features.map((f, index) => (
                <p
                  className="ul text-lg font-medium lg:text-xl"
                  key={`feature_${index}`}
                >
                  {f}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
