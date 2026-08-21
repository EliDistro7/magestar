import React from "react";
import CatagoryCard from "./CatagoryCard";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";
import { categories as staticCategories } from "@/data/staticData";

const ShopByCatagory = () => {
  const catagories = staticCategories;
  const router = useRouter();

  return (
    <section
      id="shopbycategory"
      className="py-14 lg:py-24 bg-primary relative z-10 overflow-hidden"
    >
      {/* Top border accent — mirrored from OurServices (right-to-left) */}
      <div className="absolute top-0 left-0 w-full h-[3px]
                      bg-gradient-to-r from-transparent via-accent/40 to-accent" />

      {/* Section header */}
      <div className="px-5 md:px-10 mb-10 lg:mb-14
                      flex items-end justify-between">
        <div>
          <span className="block text-accent font-bold tracking-[0.2em]
                           text-xs uppercase mb-3">
            02 — Category
          </span>
          <p className="text-4xl font-bold lg:text-5xl text-secondary
                        tracking-tight leading-[1.05]">
            Shop by Category
          </p>
        </div>

        {/* Decorative rule + CTA */}
        <div className="hidden md:flex items-center gap-8 flex-1 ml-10">
          <div className="h-[1px] flex-1
                          bg-gradient-to-l from-accent/50 to-transparent" />
          <Button
            onClick={() => router.push("/shop")}
            inverse={true}
            className="px-8 shrink-0"
          >
            Shop All
          </Button>
        </div>
      </div>

      {/* Cards — no horizontal padding on mobile for edge-to-edge bleed */}
      <div className="grid grid-cols-1 gap-[2px]
                      sm:grid-cols-2 sm:gap-4 sm:px-5
                      xl:grid-cols-4 md:px-10">
        {catagories.map((cat, index) => (
          <CatagoryCard
            key={index}
            src={`/images/services/${cat.slug}.jpeg`}
            href={`/shop/${cat.slug}`}
            title={cat.title}
          />
        ))}
      </div>

      {/* Mobile-only Shop All — below the grid */}
      <div className="mt-8 px-5 md:hidden">
        <Button
          onClick={() => router.push("/shop")}
          inverse={true}
          className="w-full"
        >
          Shop All
        </Button>
      </div>
    </section>
  );
};

export default ShopByCatagory;