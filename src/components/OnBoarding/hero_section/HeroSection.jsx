import Image from "next/image";
import React from "react";
import Header from "../../common/Header";
import Button from "../../common/Button";
import MainPoints from "./MainPoints";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const mainPoints = [
    {
      src: "/images/items-1.svg",
      title: "Free Shipping",
      desc: "On all orders over 75$",
    },
    {
      src: "/images/items-2.svg",
      title: "Tested & Proven",
      desc: "Highest quality testing standards",
    },
    {
      src: "/images/items-3.svg",
      title: "Customer Service",
      desc: "Available 24/7",
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden relative">

      {/* Magestar-style blue overlay — matches the brand's steel-blue panel treatment */}
      <div className="bg-gradient-to-r from-[#0d2236e8] via-[#1a3a5c99] to-[#1a3a5c1a] fixed top-0 left-0 w-screen h-screen z-[1]" />

      {/* Background video */}
      <div className="brightness-100 h-screen overflow-hidden fixed z-[0] top-0 w-screen left-0">
        <video
          id="vedio"
          className="object-cover min-h-screen pointer-events-none absolute top-0"
          autoPlay
          muted
        >
          <source src="/videos/video-2-compressed7.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contents */}
      <div className="absolute top-0 left-0 w-screen h-screen px-5 md:px-10 lg:px-14 xl:px-28 z-10">
        <div className="h-full flex flex-col justify-center gap-5 translate-y-[-50px]">

          {/* Eyebrow — orange accent bar + label */}
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-accent" />
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Premium Auto Parts
            </p>
          </div>

          {/* Main title — white, bold, industrial */}
          <div className="text-[2rem] font-bold max-w-[85%] md:text-[3rem] xl:text-[4.2rem] leading-tight text-secondary">
            <p className="capitalize">
              Let Magestar take care of{" "}
              <span className="text-accent">your machine</span>{" "}
              as you relax
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-secondary/70 text-[1rem] md:text-[1.15rem] max-w-[60%] font-light">
            Versatile solutions. Trusted distribution. Engineering excellence.
          </p>

          {/* CTA Button */}
          <Button onClick={() => router.push('/shop')} className={"my-3 md:my-5"}>
            Shop Now
          </Button>

          {/* Main points — separated by orange divider */}
          <div className="grid gap-7 md:grid-flow-col xl:w-[55%]">
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