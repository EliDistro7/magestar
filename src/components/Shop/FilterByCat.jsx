import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";

const FilterByCat = ({ setSubFilter }) => {
  const [subCategories, setSubCategories] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchSubCategories = async () => {
      const subCat = await client.fetch(
        `*[_type == "category" && title == "${pathname?.split("/")[2].replace("-", " ")}"]{subcategorie}`
      );
      setSubCategories(subCat[0]?.subcategorie);
    };

    if (pathname !== "/shop/all-products" && pathname !== "/shop") {
      fetchSubCategories();
    }

  }, [pathname]);

  const handleFilterSet = (e) => {
    setSubFilter(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      {/* title  */}
      <p>Filter : </p>

      {/* categories  */}
      <div>
        <select onChange={handleFilterSet} className="py-2 px-2 rounded-md focus:outline-none bg-slate-200"  >
          <option value="">All</option>
          {subCategories?.map((subCat, index) => (
            <option key={index} value={subCat}>
              {subCat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterByCat;
