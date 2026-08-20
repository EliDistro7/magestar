import React from "react";
import Button from "../../common/Button";

const ThirdSection = () => {
  const points = [
    {
      title: "Free pickup",
      detail: "In-store or curbside — no extra charge, no waiting.",
    },
    {
      title: "Personalised care",
      detail: "Battery testing and installation handled by our team.",
    },
    {
      title: "Certified technicians",
      detail: "Every service carried out by qualified professionals only.",
    },
    {
      title: "Rewards on every purchase",
      detail: "Earn points per transaction. Redeem anytime for real value.",
    },
  ];

  return (
    <section
      className='relative z-10 min-h-screen bg-[url("/images/third-section-bg.webp")] bg-cover bg-no-repeat bg-primary overflow-hidden'
    >
      {/* Dark overlay so text stays legible over the photo */}
      <div className="absolute inset-0 bg-dark/75" />

      {/* ── Orange top rule ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />

      {/* ── Content ── */}
      <div className="relative px-5 py-24 md:px-10 lg:px-20 xl:px-28 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">

        {/* Left — headline block */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-accent">
              Why Magestar
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold leading-tight text-secondary md:text-5xl xl:text-6xl">
            The One-Stop Shop for Automotive Enthusiasts
          </h2>

          {/* Body */}
          <p className="text-base text-secondary/60 leading-relaxed md:text-lg max-w-[480px]">
            Whether you&#39;re a seasoned expert or just starting out, we have
            everything to fuel your passion for vehicles — backed by people who
            know the trade.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <Button>Learn More</Button>
          </div>
        </div>

        {/* Right — numbered editorial table */}
        <div className="flex flex-col">
          {points.map((point, index) => (
            <div
              key={index}
              className={`flex gap-6 py-7 ${
                index !== points.length - 1
                  ? "border-b border-secondary/15"
                  : ""
              }`}
            >
              {/* Numeral */}
              <span className="text-[11px] tracking-[0.15em] font-semibold text-accent pt-[3px] shrink-0 w-6 text-right">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Vertical hairline */}
              <div className="w-[1px] bg-accent/30 self-stretch shrink-0" />

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-secondary leading-snug">
                  {point.title}
                </p>
                <p className="text-sm text-secondary/50 leading-relaxed">
                  {point.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;