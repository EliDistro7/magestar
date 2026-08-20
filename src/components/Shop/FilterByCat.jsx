import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";

const FilterByCat = ({ setSubFilter }) => {
  const [subCategories, setSubCategories] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchSubCategories = async () => {
      const subCat = await client.fetch(
        `*[_type == "category" && title == "${pathname
          ?.split("/")[2]
          .replace(/-/g, " ")}"]{subcategorie}`
      );
      setSubCategories(subCat[0]?.subcategorie);
    };

    if (pathname !== "/shop/all-products" && pathname !== "/shop") {
      fetchSubCategories();
    }
  }, [pathname]);

  return (
    <div className="flex items-center gap-3">
      {/* label */}
      <p className="text-sm font-medium text-text-light">Filter:</p>

      {/* select */}
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
        {subCategories?.map((subCat, index) => (
          <option key={index} value={subCat}>
            {subCat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCat;