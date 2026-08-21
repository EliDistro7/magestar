import React from "react";
import CatagoryCard from "./CatagoryCard";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";
import { categories as staticCategories } from "@/data/staticData";

const ShopByCatagory = () => {
  const catagories = staticCategories;
  const router = useRouter();

  return (
    <section className="px-5 py-14 grid gap-12 lg:py-24 z-10 bg-primary relative overflow-hidden">

      {/* Subtle top border accent — mirrors OurServices section */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent/40 to-accent" />

      {/* Header */}
      <div className="flex flex-col justify-center items-start gap-5 md:flex-row md:items-center md:justify-between md:px-10">
        {/* Title with orange underline */}
        <div>
          <p className="text-3xl font-semibold lg:text-4xl text-secondary tracking-tight">
            Shop by Category
          </p>
          <span className="block mt-2 w-12 h-[3px] bg-accent rounded-full" />
        </div>

        {/* Shop button */}
        <Button
          onClick={() => router.push("/shop")}
          inverse={true}
          className={"px-10"}
        >
          Shop
        </Button>
      </div>

      {/* Category grid */}
      <div className="grid gap-6 place-items-center md:grid-cols-2 xl:grid-cols-4 h-fit md:px-10">
        {catagories.map((cat, index) => (
          <CatagoryCard
            key={index}
            src={`/images/services/${cat.slug}.jpeg`}
            href={`/shop/${cat.slug}`}
            title={cat.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopByCatagory;