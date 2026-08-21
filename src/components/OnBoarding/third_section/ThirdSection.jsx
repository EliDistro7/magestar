import React from "react";
import Button from "../../common/Button";

const ThirdSection = () => {
  const points = [
    {
      title: "Broad Portfolio",
      detail: "Dual source of supply with solid capital base — from one-time orders to recurring procurement contracts.",
    },
    {
      title: "Value for Money",
      detail: "We source economically and offer alternatives without compromising on quality or reliability.",
    },
    {
      title: "Cost Effectiveness",
      detail: "If items exceed your budget, we will source and offer quality alternative parts that meet your needs.",
    },
    {
      title: "OTIF Delivery",
      detail: "On Time In Full — we commit to delivering every order on schedule and complete, every time.",
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
            Delivering Greater Value Through Reliable Supply
          </h2>

          {/* Body */}
          <p className="text-base text-secondary/60 leading-relaxed md:text-lg max-w-[480px]">
            We are an independent, owner-managed organization built on a
            global network — sourcing quality products across Africa, Europe,
            Asia, and beyond to keep your operations moving.
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