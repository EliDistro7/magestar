import React, { useContext, useEffect, useState } from "react";
import SideNav from "@/components/Shop/SideNav";
import { usePathname } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import { products as allProductsData, categories } from "@/data/staticData";
import { ModalContext } from "@/context/ModalContext";

// Build subcategories from static data
const subCatMap = categories.reduce((acc, cat) => {
  const subs = [...new Set(allProductsData
    .filter((p) => p.mainCategory === cat.slug)
    .map((p) => p.subCategory)
    .filter(Boolean))];
  acc[cat.slug] = subs;
  return acc;
}, {});

const Shop = () => {
  const pathname = usePathname();
  const [subFilter, setSubFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isBrowseByCatOpen, setIsBrowseByCatOpen] = useState(false);
  const { setModalOpen, setSelectedProduct } = useContext(ModalContext);

  const currentSlug = pathname?.split("/")[2];
  const isAllProducts = !currentSlug || currentSlug === "all-products";
  const categoryTitle = isAllProducts
    ? null
    : currentSlug.replace(/-/g, " ");

  useEffect(() => {
    setSubFilter("");
  }, [pathname]);

  useEffect(() => {
    let filtered = isAllProducts
      ? allProductsData
      : allProductsData.filter((p) => p.mainCategory === currentSlug);
    if (subFilter) {
      filtered = filtered.filter((p) => p.subCategory === subFilter);
    }
    setFilteredProducts(filtered);
  }, [pathname, subFilter]);

  const currentSubCats = currentSlug ? subCatMap[currentSlug] || [] : [];

  return (
    <main className="min-h-screen overflow-hidden bg-muted">
      <div className="grid lg:grid-cols-[15%,1fr] h-full mt-5 lg:mt-20 px-5 md:px-10 lg:px-14">
        {/* side nav */}
        <SideNav
          categories={categories}
          isOpen={isBrowseByCatOpen}
          setOpen={setIsBrowseByCatOpen}
        />

        {/* products display */}
        <section className="grid gap-5 lg:gap-20 pb-20">
          {/* header row */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-heading text-text-body capitalize">
                {categoryTitle ? categoryTitle : "All Products"}
              </h1>
              <div className="w-10 h-[3px] bg-accent mt-2" />
            </div>

            {/* mobile browse button */}
            <button
              onClick={() => setIsBrowseByCatOpen(true)}
              className="lg:hidden group flex items-center gap-2 border border-secondary/20 hover:border-accent bg-white/5 hover:bg-accent/10 transition-all duration-200 py-2 px-5 w-fit cursor-pointer"
            >
              <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-accent">Browse by</span>
              <span className="w-[1px] h-3 bg-secondary/20 group-hover:bg-accent/40 transition-colors duration-200" />
              <span className="text-sm font-medium text-secondary/80 group-hover:text-secondary transition-colors duration-200">
                {categoryTitle || "All Products"}
              </span>
            </button>

            {/* sub-category filter */}
            {!isAllProducts && currentSubCats.length > 0 && (
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-text-light">Filter:</p>
                <select
                  value={subFilter}
                  onChange={(e) => setSubFilter(e.target.value)}
                  className="py-2 px-3 rounded-md bg-secondary text-text-body border border-primary/30 text-sm font-medium focus:outline-none focus:border-accent transition-colors duration-200 cursor-pointer shadow-brand"
                >
                  <option value="">All</option>
                  {currentSubCats.map((sub, i) => (
                    <option key={i} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* product count */}
          <p className="text-sm text-text-light -mt-10 lg:-mt-14">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>

          {/* product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 place-items-center md:grid-cols-3 xl:grid-cols-4 gap-x-2 xs:gap-x-5 gap-y-10">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={`product_${index}`}
                  onClick={() => {
                    setModalOpen(true);
                    setSelectedProduct(product);
                  }}
                  mainCategory={product.mainCategory}
                  bestSeller={product.bestSeller}
                  id={product.name}
                  image={product.image}
                  name={product.name}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl text-accent">∅</span>
              </div>
              <p className="text-xl font-heading text-text-body">No products found</p>
              <p className="text-text-light">Try selecting a different category or filter.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Shop;
