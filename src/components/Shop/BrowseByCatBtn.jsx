import React from "react";

const BrowseByCatBtn = ({ className, onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} group flex items-center gap-2 border border-secondary/20 hover:border-accent bg-white/5 hover:bg-accent/10 transition-all duration-200 py-2 px-5 w-fit cursor-pointer`}
    >
      {/* Eyebrow label */}
      <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-accent">
        Browse by
      </span>

      {/* Divider */}
      <span className="w-[1px] h-3 bg-secondary/20 group-hover:bg-accent/40 transition-colors duration-200" />

      {/* Category name */}
      <span className="text-sm font-medium text-secondary/80 group-hover:text-secondary transition-colors duration-200">
        {title || "All Products"}
      </span>
    </button>
  );
};

export default BrowseByCatBtn;