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
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 h-screen w-screen bg-dark/60 z-50 backdrop-blur-sm lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Side nav */}
      <div
        className={`fixed top-0 left-0 z-50 w-[85%] h-screen bg-secondary px-6 py-10 shadow-brand transition-all duration-500
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          lg:static lg:w-auto lg:h-auto lg:bg-muted lg:rounded-md lg:p-5 lg:mr-5 lg:shadow-none`}
      >
        <div className="grid gap-6 sticky top-10">
          {/* Section label */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-light">
              Browse by
            </p>
            {/* Orange underline accent */}
            <div className="mt-2 w-8 h-[2px] bg-accent" />
          </div>

          {/* Category links */}
          <nav className="grid gap-1">
            {categories?.map((cat, index) => {
              const isActive = pathname === `/shop/${cat.slug}`;
              return (
                <Link
                  key={`category_${index}`}
                  href={`/shop/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className={`relative px-3 py-2 rounded text-sm font-medium capitalize transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-secondary"
                        : "text-text-body hover:bg-primary/10 hover:text-primary"
                    }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-accent rounded-r" />
                  )}
                  {cat.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;