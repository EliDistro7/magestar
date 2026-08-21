import React, { useContext, useRef } from "react";
import ProductCard from "../../common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { products as allProducts } from "@/data/staticData";
import { ModalContext } from "@/context/ModalContext";

const TopSellers = () => {
  const swiperRef = useRef();
  const products = allProducts.filter((p) => p.bestSeller);
  const { setModalOpen, setSelectedProduct } = useContext(ModalContext);

  return (
    <section className="py-14 lg:py-24 bg-dark relative z-10 overflow-hidden">

      {/* Section header */}
      <div className="px-5 md:px-10 mb-10 lg:mb-14
                      flex items-end justify-between">
        <div>
          <span className="block text-accent font-bold tracking-[0.2em]
                           text-xs uppercase mb-3">
            03 — Best Sellers
          </span>
          <p className="text-4xl font-bold lg:text-5xl text-secondary
                        tracking-tight leading-[1.05]">
            Top{" "}
            <span className="text-accent">Sellers</span>
          </p>
        </div>

        {/* Nav arrows in header row — editorial carousel pattern */}
        <div className="flex items-center gap-3 shrink-0 ml-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="w-10 h-10 lg:w-12 lg:h-12
                       border border-secondary/30 rounded-none
                       flex items-center justify-center
                       text-secondary/60 hover:border-accent hover:text-accent
                       transition-all duration-200"
          >
            {/* Left chevron */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="w-10 h-10 lg:w-12 lg:h-12
                       border border-secondary/30 rounded-none
                       flex items-center justify-center
                       text-secondary/60 hover:border-accent hover:text-accent
                       transition-all duration-200"
          >
            {/* Right chevron */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper — full width, padding creates the gutters */}
      <div className="px-5 md:px-10">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={12}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            480:  { slidesPerView: 2.2, spaceBetween: 12 },
            768:  { slidesPerView: 2.5, spaceBetween: 16 },
            1024: { slidesPerView: 3.2, spaceBetween: 16 },
            1440: { slidesPerView: 4,   spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="w-full h-fit"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                onClick={() => {
                  setModalOpen(true);
                  setSelectedProduct(product);
                }}
                mainCategory={product.mainCategory}
                id={product.name}
                name={product.name}
                image={product.image}
                bestSeller={product.bestSeller}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopSellers;