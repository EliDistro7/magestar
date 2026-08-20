import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = ({ categories, isOpen, setOpen }) => {
  const router = useRouter();

  if (!categories?.some((category) => category.title === "all products")) {
    categories.unshift({
      title: "all products",
      slug: "all-products",
    });
  }
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/shop") {
      router.push("/shop/all-products");
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* backdop  */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.50)] z-50 backdrop-blur-md lg:hidden transition-all duration-300 ${isOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      ></div>

      {/* side nav */}
      <div
        className={`bg-white fixed top-0 left-0 z-50 w-[85%] h-screen px-5 py-10 transition-all duration-500 ${isOpen ? "" : "-translate-x-full lg:translate-x-0"} lg:bg-[#ededed] lg:p-5 lg:rounded-md lg:mr-5 lg:static lg:w-auto lg:h-auto lg:top-auto lg:left-auto`}
      >
        {/* browse by  */}
        <div className="grid gap-5 fixed ">
          {/* TITLE  */}
          <p className="text-2xl font-medium">Browse by</p>
          {/* catagories */}
          <div className="grid gap-5 lg:gap-2">
            {categories?.map((cat, index) => (
              <Link
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === `/shop/${cat.slug}` &&
                  "underline underline-offset-2 text-teritiary font-medium"
                } transition-all duration-500 hover:text-teritiary capitalize`}
                href={`/shop/${cat.slug}`}
                key={`catagorie_${index}`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
