import React, { useContext, useEffect, useState } from "react";
import SideNav from "@/components/Shop/SideNav";
import { usePathname } from "next/navigation";
import ProductCard from "@/components/common/ProductCard";
import { client } from "../../../sanity/lib/client";
import FilterByCat from "@/components/Shop/FilterByCat";
import BrowseByCatBtn from "@/components/Shop/BrowseByCatBtn";
import { ModalContext } from "@/context/ModalContext";

const Shop = () => {
  const pathname = usePathname();
  const [subFilter, setSubFilter] = useState();
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categories, setCatagories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isBrowseByCatOpen, setIsBrowseByCatOpen] = useState(false);
  const { setModalOpen, setSelectedProduct } = useContext(ModalContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const cat = await client.fetch(
        `*[_type == "category"]{title, "slug": slug.current}`
      );
      setCatagories(cat);
    };
    fetchCategories();

    const fetchProducts = async () => {
      const products = await client.fetch(`
        *[_type == "product"]{
          name,
          title,
          "image": productImage,
          mainCategory,
          subCategory,
          bestSeller
        }
      `);
      setAllProducts(products);
    };
    fetchProducts();

    if (pathname !== "/shop/all-products" && pathname !== "/shop") {
      setCategoryTitle(pathname?.split("/")[2].replace(/-/g, " "));
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/shop/all-products" || pathname === "/shop") {
      setFilteredProducts(allProducts);
      setCategoryTitle(null);
    } else {
      const filtered = allProducts?.filter(
        (product) =>
          product?.mainCategory === pathname?.split("/")[2].replace(/-/g, " ")
      );
      setFilteredProducts(filtered);
    }
  }, [allProducts]);

  useEffect(() => {
    if (subFilter) {
      const filtered = allProducts?.filter(
        (product) =>
          product?.subCategory === subFilter &&
          product?.mainCategory === pathname?.split("/")[2].replace(/-/g, " ")
      );
      setFilteredProducts(filtered);
    } else {
      const filtered = allProducts?.filter(
        (product) =>
          product?.mainCategory === pathname?.split("/")[2].replace(/-/g, " ")
      );
      setFilteredProducts(filtered);
    }
  }, [subFilter]);

  const isAllProducts =
    pathname === "/shop/all-products" || pathname === "/shop";

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
            {/* page title */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-heading text-text-body capitalize">
                {categoryTitle ? categoryTitle : "All Products"}
              </h1>
              {/* orange underline rule */}
              <div className="w-10 h-[3px] bg-accent mt-2" />
            </div>

            <BrowseByCatBtn
              className="lg:hidden"
              onClick={() => setIsBrowseByCatOpen(true)}
              title={categoryTitle}
            />

            {!isAllProducts && (
              <FilterByCat setSubFilter={setSubFilter} />
            )}
          </div>

          {/* product count */}
          <p className="text-sm text-text-light -mt-10 lg:-mt-14">
            {filteredProducts?.length ?? 0}{" "}
            {filteredProducts?.length === 1 ? "product" : "products"} found
          </p>

          {/* product grid */}
          {filteredProducts?.length > 0 ? (
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
                  id={product.title}
                  image={product.image}
                  name={product.name}
                />
              ))}
            </div>
          ) : (
            /* empty state */
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl text-accent">∅</span>
              </div>
              <p className="text-xl font-heading text-text-body">
                No products found
              </p>
              <p className="text-text-light">
                Try selecting a different category or filter.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Shop;