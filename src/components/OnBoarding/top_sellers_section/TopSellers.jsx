import React, { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "../../common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { client } from "../../../../sanity/lib/client";
import { ModalContext } from "@/context/ModalContext";
// import "swiper/css/navigation";

const TopSellers = () => {
  var swiperRef = useRef();
  const [products, setProducts] = useState([]);
  const { setModalOpen , setSelectedProduct } = useContext(ModalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch(
        '*[_type == "product" && bestSeller == true]{name, "image": productImage, title , mainCategory}'
      );
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <section className="h-auto max-w-screen pt-20 pb-28 z-10 bg-primary relative">
      {/* title  */}
      <p className="text-3xl font-medium w-[80%] md:text-4xl lg:w-[50%] xl:text-5xl px-5 md:px-10 lg:px-20">
        Top Sellers
      </p>

      {/* products  */}
      <div className="relative lg:mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper w-full md:w-[80%] h-fit relative mt-10 "
        >
          {products?.map((product, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="w-full flex justify-center">
                <ProductCard
                  onClick={()=>{
                    setModalOpen(true);
                    setSelectedProduct(product);
                  }}
                  mainCategory={product.mainCategory}
                  id={product.title}
                  name={product.name}
                  image={product.image}
                  bestSeller={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="swipe-btn-next"
          onClick={() => swiperRef.current.slideNext()}
        ></button>
        <button
          className="swipe-btn-prev"
          onClick={() => swiperRef.current.slidePrev()}
        ></button>
      </div>
    </section>
  );
};

export default TopSellers;
