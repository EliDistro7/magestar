import Image from "next/image";
import React from "react";

const ReviewCard = ({ image, user, createdAt, review, product }) => {
  return (
    <div className="relative w-[90%] aspect-[3/4] rounded-sm overflow-hidden group shadow-brand">
      {/* Image — full bleed */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={product}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

      {/* Content — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 grid gap-3">
        {/* Orange accent bar */}
        <div className="w-8 h-[2px] bg-accent" />

        {/* Product name */}
        <p className="text-secondary text-xl font-semibold leading-tight tracking-tight">
          {product}
        </p>

        {/* Review */}
        <p className="text-secondary/75 text-sm leading-relaxed line-clamp-3">
          {review}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-secondary/20" />

        {/* User + date */}
        <div className="flex items-center justify-between">
          <p className="text-secondary text-sm font-medium">{user}</p>
          <p className="text-secondary/50 text-xs tracking-wide">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;