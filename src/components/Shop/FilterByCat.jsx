import React from "react";

const FilterByCat = ({ setSubFilter, subCategories = [] }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="text-sm font-medium text-text-light">Filter:</p>
      <select
        onChange={(e) => setSubFilter(e.target.value)}
        className="
          py-2 px-3 rounded-md
          bg-secondary text-text-body
          border border-primary/30
          text-sm font-medium
          focus:outline-none focus:border-accent
          transition-colors duration-200
          cursor-pointer
          shadow-brand
        "
      >
        <option value="">All</option>
        {subCategories.map((subCat, index) => (
          <option key={index} value={subCat}>
            {subCat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCat;
