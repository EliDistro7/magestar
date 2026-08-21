import React from "react";
import Button from "./Button";
import BestSellerTag from "./BestSellerTag";

const ProductCard = ({ image, name, bestSeller, id, mainCategory, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer group
                 rounded-lg overflow-hidden
                 border border-primary/40
                 transition-all duration-300
                 hover:border-accent/60"
    >
      {/* Image area */}
      <div className="relative w-full aspect-square overflow-hidden bg-primary/20">
        {bestSeller && <BestSellerTag />}

        {image && (
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full
                       transition-all duration-700
                       group-hover:scale-105 group-hover:brightness-75"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        )}

        {/* Orange left-border on hover — consistent with card language */}
        <div className="absolute top-0 left-0 h-full w-[3px]
                        bg-accent scale-y-0 group-hover:scale-y-100
                        transition-transform duration-500 ease-out origin-bottom" />
      </div>

      {/* Info panel */}
      <div className="bg-primary px-4 py-3 lg:px-5 lg:py-4
                      flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-secondary font-bold uppercase tracking-[0.08em]
                        text-xs lg:text-sm leading-tight truncate">
            {name}
          </p>
          <p className="text-secondary/50 text-[10px] lg:text-xs
                        font-medium mt-1 capitalize">
            {mainCategory}
          </p>
        </div>

        <Button
          inverse={true}
          className="shrink-0 py-1.5 px-3 text-[10px] lg:text-xs text-nowrap
                     transition-colors duration-200
                     group-hover:bg-accent group-hover:border-accent group-hover:text-secondary"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;