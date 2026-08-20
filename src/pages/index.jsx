import HeroSection from "@/components/OnBoarding/hero_section/HeroSection";
import ProductReview from "@/components/OnBoarding/product_review_section/ProductReview";
import OurServices from "@/components/OnBoarding/services_section/OurServices";
import ShopByCatagory from "@/components/OnBoarding/shop_by_catagory_section/ShopByCatagory";
import ThirdSection from "@/components/OnBoarding/third_section/ThirdSection";
import TopSellers from "@/components/OnBoarding/top_sellers_section/TopSellers";

export default function Home() {
  return (
    // bg-dark = deep navy base; text-secondary = white — Magestar brand foundation
    <main className="bg-dark text-secondary overflow-hidden">
      <HeroSection />
      <OurServices />
      <ShopByCatagory />
      <ThirdSection />
      <TopSellers />
      {/* <ProductReview /> */}
    </main>
  );
}