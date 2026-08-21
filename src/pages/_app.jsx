import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Modal from "@/components/common/Modal";
import { ModalContext } from "@/context/ModalContext";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  const pathname = usePathname() || "";
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <div className="overflow-x-hidden">
      {/* modal  */}
      <Modal
        isOpen={isModalOpen}
        product={selectedProduct}
        setOpen={setModalOpen}
      />

      {/* toaster  */}
      <Toaster />

      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Header />

      <ModalContext.Provider
        value={{
          isModalOpen,
          setModalOpen,
          selectedProduct,
          setSelectedProduct,
        }}
      >
        <Component {...pageProps} />
      </ModalContext.Provider>

      <Footer />
    </div>
  );
}
