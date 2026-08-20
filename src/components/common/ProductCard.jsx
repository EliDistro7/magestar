import Image from "next/image";
import React, { useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import BestSellerTag from "./BestSellerTag";

const ProductCard = ({
  image,
  name,
  bestSeller,
  id,
  mainCategory,
  onClick,
}) => {
  const builder = imageUrlBuilder(client);

  return (
    <>
      <div
        onClick={onClick}
        className="w-[140px] sm:w-[170px] xs:w-[200px] lg:w-[90%] aspect-[3/5] xl:aspect-[3/5] grid gap-3 relative rounded-xl overflow-hidden cursor-pointer group border-[0.5px] border-[#00000063]"
      >
        {/* bestseller tag  */}
        {bestSeller && <BestSellerTag />}

        {/* image  */}
        <div className="w-full aspect-[3/3] lg:aspect-[3/3.8] overflow-hidden rounded relative">
          <Image
            src={builder?.image(image)?.url()}
            alt={name}
            fill
            className="object-cover group-hover:scale-125 transition-all duration-500"
          />
        </div>

        {/* name and button  */}
        <div className="grid grid-cols-[1fr,min-content] gap-2 p-2 lg:p-3 xl:p-5 bg-primary z-10">
          {/* name  */}
          <div className="grid gap-1 lg:gap-3 capitalize text-ellipsis overflow-hidden ">
            <p className="text-xs xs:text-base lg:text-xl xl:text-2xl font-semibold ">
              {name}
            </p>
            <p className="text-[10px] lg:text-[14px] opacity-50 font-medium">
              {mainCategory}
            </p>
          </div>
          {/* button  */}
          <Button
            className={
              "py-[5px] px-[7px] xs:py-2 xs:px-3  text-[10px] lg:text-xs md:text-sm h-fit group-hover:bg-teritiary group-hover:border-transparent lg:mr-3 text-nowrap"
            }
            inverse={true}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
