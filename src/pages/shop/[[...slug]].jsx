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
    //fetch all categories
    const fetchCategories = async () => {
      const cat = await client.fetch(
        `*[_type == "category"]{title, "slug" : slug.current}`
      );
      setCatagories(cat);
    };
    fetchCategories();

    //fetch all products
    const fetchProducts = async () => {
      const products = await client.fetch(`
        *[_type == "product"]{
    name,
    title,
    "image" : productImage,
    mainCategory,
    subCategory,
    bestSeller
}
`);
      setAllProducts(products);
    };
    fetchProducts();

    //set category title
    if (pathname !== "/shop/all-products" && pathname !== "/shop") {
      setCategoryTitle(pathname?.split("/")[2].replace(/-/g, " "));
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/shop/all-products" || pathname === "/shop") {
      setFilteredProducts(allProducts);
      setCategoryTitle(null);
    } else {
      const filtered = allProducts?.filter((product) => {
        return (
          product?.mainCategory === pathname?.split("/")[2].replace(/-/g, " ")
        );
      });
      setFilteredProducts(filtered);
    }
  }, [allProducts]);

  useEffect(() => {
    if (subFilter) {
      const filtered = allProducts?.filter((product) => {
        return (
          product?.subCategory === subFilter &&
          product?.mainCategory === pathname?.split("/")[2].replace(/-/g, " ")
        );
      });
      setFilteredProducts(filtered);
    } else {
      const filteredProducts = allProducts?.filter((product) => {
        return (
          product?.mainCategory === pathname?.split("/")[2].replace(/-/g, " ")
        );
      });
      setFilteredProducts(filteredProducts);
    }
  }, [subFilter]);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* main container  */}
      <div className="grid lg:grid-cols-[15%,1fr] h-full mt-5 lg:mt-20 px-5 md:px-10 lg:px-14">
        {/* browses by */}
        <SideNav
          categories={categories}
          isOpen={isBrowseByCatOpen}
          setOpen={setIsBrowseByCatOpen}
        />

        {/* products display section  */}
        <section className="grid gap-5 lg:gap-20 pb-20 ">
          {/* title and filters  */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* title  */}
            <p className="text-4xl lg:text-5xl font-semibold capitalize">
              {categoryTitle ? categoryTitle : "All Products"}
            </p>

            {/* filters  */}

            <BrowseByCatBtn
              className={"lg:hidden"}
              onClick={() => setIsBrowseByCatOpen(true)}
              title={categoryTitle}
            />

            {pathname !== "/shop/all-products" && pathname !== "/shop" && (
              <FilterByCat setSubFilter={setSubFilter} />
            )}
          </div>

          {/* products container  */}
          <div className="grid grid-cols-2 place-items-center md:grid-cols-3 xl:grid-cols-4 gap-x-2 xs:gap-x-5 gap-y-10 ">
            {filteredProducts?.map((product, index) => (
              <ProductCard
                onClick={() => {
                  setModalOpen(true);
                  setSelectedProduct(product);
                }}
                mainCategory={product.mainCategory}
                bestSeller={product.bestSeller}
                id={product.title}
                image={product.image}
                name={product.name}
                key={`product_${index}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Shop;
