// Modal.jsx
import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import BestSellerTag from "./BestSellerTag";
import qs from "qs";
import toast from "react-hot-toast";

const Modal = ({ isOpen, setOpen, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    make: "",
    model: "",
    engine: "",
    email: "",
    phone: "",
  });

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleBuyNow = async () => {
    const { email, phone, make, model, engine, name } = formData;

    if (!email || !phone || !name) {
      toast.error("Name, Email and Phone are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const phoneRegex = /^\+?[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    toast.loading("Loading...");
    setLoading(true);

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const messageToSend = `
    Product Details:\n
    ----------------\n
    Name: *${product?.name.toUpperCase()}*\n
    Category: *${product?.mainCategory.toUpperCase()}*\n\n
    Vehicle Details:\n
    ----------------\n
    ${make ? `Make: *${make.toUpperCase()}*` : ""}\n
    ${model ? `Model: *${model.toUpperCase()}*` : ""}\n
    ${engine ? `Engine: *${engine.toUpperCase()}*` : ""}\n\n
    User Details:\n
    -------------\n
    Name: ${name}\n
    Email: ${email}\n
    Phone: ${phone}\n
    `;

    try {
      const res = await fetch("/api/send-buy-product-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, formData }),
      });

      toast.dismiss();
      if (!res.ok) console.error("Failed to send email.");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.dismiss();
      toast.error("Error occurred while sending email.");
    } finally {
      setLoading(false);
      setOpen(false);
    }

    const url = `https://wa.me/${phoneNumber}?${qs.stringify({ text: messageToSend })}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-dark/75 backdrop-blur-sm z-[99] transition-all duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 z-[100]
          w-[92%] max-w-[820px] xl:max-w-[920px]
          bg-secondary rounded-sm overflow-hidden shadow-brand
          transition-all duration-500
          md:grid md:grid-cols-2
          ${isOpen ? "-translate-y-1/2 opacity-100" : "translate-y-[110%] opacity-0 pointer-events-none"}`}
      >
        {/* Best Seller tag */}
        {product?.bestSeller && <BestSellerTag />}

        {/* Product image — left panel */}
        <div className="relative w-full h-[220px] md:h-full bg-dark">
          {product?.image && (
            <img
              src={product.image}
              alt={product?.name}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          )}
          {/* Gradient overlay for image panel */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent md:bg-gradient-to-r" />

          {/* Product name overlay on image — mobile only */}
          <div className="absolute bottom-0 left-0 p-5 md:hidden">
            <p className="text-secondary font-semibold text-lg capitalize leading-tight">
              {product?.name}
            </p>
            <p className="text-secondary/60 text-xs capitalize mt-1">
              {product?.mainCategory}
            </p>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex flex-col bg-secondary">
          {/* Panel header */}
          <div className="px-6 pt-6 pb-4 border-b border-primary/10">
            {/* Hidden on mobile — shown on desktop */}
            <p className="hidden md:block font-semibold text-xl lg:text-2xl text-text-body capitalize leading-tight">
              {product?.name}
            </p>
            <p className="hidden md:block text-text-light text-xs capitalize mt-1">
              {product?.mainCategory}
            </p>

            <div className="mt-3 w-8 h-[2px] bg-accent" />
          </div>

          {/* Scrollable form body */}
          <div className="overflow-y-auto scroll-hidden flex-1 max-h-[420px] px-6 py-5">
            <form
              onSubmit={(e) => { e.preventDefault(); handleBuyNow(); }}
              className="grid gap-4"
            >
              <Divider title="Vehicle Details" />
              <InputBox
                onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                placeholder="Make (e.g. Toyota)"
              />
              <InputBox
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                placeholder="Model (e.g. Hilux)"
              />
              <InputBox
                onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                placeholder="Engine (e.g. 2.8L Diesel)"
              />

              <Divider title="Your Details" />
              <InputBox
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name *"
              />
              <InputBox
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email address *"
              />
              <InputBox
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone number *"
              />

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-2 py-3 rounded-sm text-sm font-semibold tracking-wide text-secondary transition-all duration-200
                  ${isLoading
                    ? "bg-primary/50 cursor-not-allowed"
                    : "bg-accent hover:bg-accent-hover shadow-accent-glow hover:shadow-none"
                  }`}
              >
                {isLoading ? "Sending..." : "Buy Now via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

function Divider({ title }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-text-light">
      <div className="flex-1 h-px bg-primary/15" />
      <span>{title}</span>
      <div className="flex-1 h-px bg-primary/15" />
    </div>
  );
}