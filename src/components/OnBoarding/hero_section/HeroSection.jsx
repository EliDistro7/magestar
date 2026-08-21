"use client";
import React, { useEffect, useState } from "react";
import Button from "../../common/Button";
import MainPoints from "./MainPoints";
import { useRouter } from "next/navigation";

const HEADLINE_SLIDES = [
  { line1: "Versatile", line2: "Solutions." },
  { line1: "Trusted", line2: "Distribution." },
  { line1: "Engineering", line2: "Excellence." },
];

const HeroSection = () => {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % HEADLINE_SLIDES.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const mainPoints = [
    {
      src: "/images/items-1.svg",
      title: "Global Sourcing",
      desc: "Parts & equipment across 4 continents",
    },
    {
      src: "/images/items-2.svg",
      title: "HVAC & Mining",
      desc: "Engineering solutions you can rely on",
    },
    {
      src: "/images/items-3.svg",
      title: "24hr Call-Out",
      desc: "Emergency response, always available",
    },
  ];

  const { line1, line2 } = HEADLINE_SLIDES[activeSlide];

  return (
    <section className="min-h-screen overflow-hidden relative">

      {/* ── Video background ── */}
      <div className="fixed z-[0] inset-0 overflow-hidden">

        {/* The video itself — portrait-safe fill technique */}
        <video
          id="vedio"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/videos/site.mp4" type="video/mp4" />
        </video>

        {/* Film grain — unifies portrait compression artifacts with the dark UI */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "160px 160px",
          }}
        />

        {/* Cinematic top + bottom bars — turns portrait crop into intentional letterbox */}
        <div className="absolute top-0 inset-x-0 h-[7vh] bg-dark z-[2]" />
        <div className="absolute bottom-0 inset-x-0 h-[7vh] bg-dark z-[2]" />

        {/* Gradient — left heavy so content stays readable */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0d2236f2] via-[#1a3a5ccc] to-[#1a3a5c22]" />

        {/* Vignette — darkens corners */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, transparent 35%, rgba(13,34,54,0.65) 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="absolute inset-0 px-5 md:px-10 lg:px-14 xl:px-28 z-10">
        <div className="h-full flex flex-col justify-center gap-4 md:gap-5 -mt-8 md:-mt-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-accent shrink-0" />
            <p className="text-accent text-[0.65rem] md:text-xs font-semibold tracking-[0.2em] uppercase">
              HVAC · Mining · Procurement · Civil Works
            </p>
          </div>

          {/* Cycling headline — fixed height avoids layout shift */}
          <div className="h-[7.5rem] md:h-[11rem] xl:h-[14rem] flex flex-col justify-center overflow-hidden">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(14px)",
                transition: "opacity 0.38s ease, transform 0.38s ease",
              }}
            >
              <p className="text-[2.6rem] md:text-[4rem] xl:text-[5.5rem] font-bold leading-[1.0] text-secondary">
                {line1}
              </p>
              <p className="text-[2.6rem] md:text-[4rem] xl:text-[5.5rem] font-bold leading-[1.0] text-accent">
                {line2}
              </p>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {HEADLINE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setVisible(false);
                  setTimeout(() => { setActiveSlide(i); setVisible(true); }, 400);
                }}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? "w-5 h-[3px] bg-accent"
                    : "w-[3px] h-[3px] bg-secondary/35 hover:bg-secondary/60"
                }`}
              />
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-secondary/65 text-[0.9rem] md:text-[1.05rem] max-w-[90%] md:max-w-[480px] font-light leading-relaxed">
            From HVAC installation to mining equipment sourcing — Magestar
            delivers quality products and reliable services across Tanzania
            and beyond.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <Button onClick={() => router.push("/shop")}>Shop Parts</Button>
            <Button onClick={() => router.push("/#ourservices")} inverse={true}>
              Our Services
            </Button>
          </div>

          {/* Main points */}
          <div className="grid gap-5 md:grid-flow-col md:gap-7 xl:w-[60%] mt-1">
            {mainPoints.map((point, index) => (
              <MainPoints
                key={index}
                src={point.src}
                title={point.title}
                desc={point.desc}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;