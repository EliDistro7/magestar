import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import InputBox from "./InputBox";
import Button from "./Button";
import BestSellerTag from "./BestSellerTag";
import qs from "qs";
import toast from "react-hot-toast";

const Modal = ({ isOpen, setOpen, product }) => {
  const builder = imageUrlBuilder(client);
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleBuyNow = async () => {
    const { email, phone, make, model, engine, name } = formData;

    if (!email || !phone || !name) {
      toast.error("Name , Email and Phone are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const phoneRegex = /^\+?[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
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
    Name: ${formData.name}\n
    Email: ${formData.email}\n
    Phone: ${formData.phone}\n
  `;

    const emailData = {
      product,
      formData,
    };

    try {
      const res = await fetch("/api/send-buy-product-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (res.ok) {
        toast.dismiss();
        setLoading(false);
        setOpen(false);
      } else {
        console.error("Failed to send email.");
        toast.dismiss();
        setLoading(false);
        setOpen(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.dismiss();
      setLoading(false);
      setOpen(false);
      toast.error("Error occurred while sending email.");
    }

    // Opening WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?${qs.stringify({
      text: messageToSend,
    })}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* backdrop  */}
      <div
        onClick={() => setOpen(false)}
        className={`w-screen h-screen fixed top-0 left-0 bg-[#00000083] z-[99] transition-all duration-500 backdrop-blur-sm ${
          isOpen
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* modal  */}
      <div
        className={`bg-primary w-[85%] min-h-[50%] max-w-[800px] xl:max-w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] rounded-xl transition-all duration-500 overflow-hidden ${
          !isOpen && "translate-y-[100%] opacity-0 pointer-events-none"
        } md:grid md:grid-cols-2`}
      >
        {/* bestseller tag  */}
        {product?.bestSeller && <BestSellerTag />}

        {/* product image  */}
        <div className="w-full h-[200px] md:h-full relative">
          {product && (
            <Image
              src={builder?.image(product.image).url()}
              alt={product?.title}
              fill
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* product details  */}
        <div className="p-5 lg:p-10 ">
          {/* product title  */}
          <p className="capitalize font-semibold text-xl lg:text-2xl xl:text-3xl">
            {product?.name}
          </p>

          {/* product category  */}
          <p className="capitalize font-medium opacity-50 text-xs lg:text-sm xl:text-base">
            {product?.mainCategory}
          </p>

          {/* form  */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleBuyNow();
            }}
            className="grid gap-5 pt-5 lg:px-2 md:h-[80%] overflow-y-scroll scroll-hidden max-h-[300px] lg:max-h-[400px] "
          >
            <Divider title={"Vehicle Details"} />

            {/* make */}
            <InputBox
              onChange={(e) =>
                setFormData({ ...formData, make: e.target.value })
              }
              placeholder={"Enter make"}
            />
            {/* model */}
            <InputBox
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              placeholder={"Enter model"}
            />
            {/* engine */}
            <InputBox
              onChange={(e) => {
                setFormData({ ...formData, engine: e.target.value });
              }}
              placeholder={"Enter engine"}
            />

            <Divider title={"User Details"} />

            {/* name */}
            <InputBox
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={"Enter name"} // Placeholder for the input field
            />

            {/* email */}
            <InputBox
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              placeholder={"Enter email"}
            />

            {/* phone */}
            <InputBox
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              placeholder={"Enter phone"}
            />

            {/* button */}
            <div className="flex justify-center">
              <Button
                disabled={isLoading}
                className={"w-[70%] py-[10px] lg:w-fit lg:px-20 "}
              >
                Buy
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

function Divider({ title }) {
  return (
    <div className="flex items-center text-sm text-black/50 gap-3">
       <div className="w-full h-[1px] bg-black/50 flex-1"></div>
      <div>{title} </div>
      <div className="w-full h-[1px] bg-black/50 flex-1"></div>
    </div>
  );
}
