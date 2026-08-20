import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

// card component
const Card = ({ icon, title, children }) => {
  return (
    <div className="grid gap-3 place-items-center p-5 bg-teritiary bg-opacity-10 rounded-2xl md:gap-5">
      {/* title  */}
      <div className="grid gap-3 place-items-center">
        {/* icon  */}
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
          className="w-20 opacity-70"
        />
        {/* title  */}
        <h1 className="font-medium text-teritiary text-2xl opacity-70 text-center lg:text-3xl max-w-[300px]">
          {title}
        </h1>
      </div>

      {/* value  */}
      <p className="text-lg text-center lg:text-xl">{children}</p>
    </div>
  );
};

// input component
const FormInput = ({ label, placeholder, type, onChange, name }) => {
  return (
    <>
      <div className="grid gap-2 w-full">
        <label htmlFor={label} className="text-sm font-medium lg:text-xl">
          {label}
        </label>
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="border-2 rounded-md p-2 w-full border-teritiary border-opacity-20 focus:outline-none focus:border-opacity-100 lg:text-lg lg:py-3 lg:px-5"
          type={type}
          name={name}
        />
      </div>
    </>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState();
  const [isBtnLoading, setBtnLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (
      !formData.full_name ||
      !formData.email ||
      !formData.phone ||
      !formData.details
    ) {
      toast.error("Please fill in all the fields");
      return false;
    }

    //check phone is valid
    const phoneRegex = /^\+?[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setBtnLoading(true);
    toast.loading("Sending your enquiry...");

    // send the form data to the server
    fetch("/api/send-contact-us-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          toast.dismiss();
          toast.success(data.message);
          setFormData({});
          e.target.reset();
          setBtnLoading(false);
        } else {
          toast.dismiss();
          toast.error(data.message);
          setBtnLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <seciton className="min-h-screen">
      {/* top part  */}
      <div
        style={{ backgroundImage: "url('/images/contact-bg.webp')" }}
        className=" h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <div className="bg-[#000000a0] h-full w-full p-6 md:px-20 lg:px-32 xl:px-40 grid content-center gap-5 lg:gap-6  text-primary">
          {/* title  */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            Contact Us
          </h1>
          {/* sub title  */}
          <p className="text-lg md:text-xl lg:text-2xl">
            Reach Out, We &#39; re Here to Help!
          </p>
        </div>
      </div>

      {/* location and address and contacts  */}
      <div className="mt-5 px-5 md:px-10 xl:px-20 lg:mt-10 xl:mt-20 grid gap-5 lg:gap-10 lg:grid-cols-[30%,1fr]">
        {/* location  */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.016784767895!2d32.89794447496887!3d-2.5013535974772365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMzAnMDQuOSJTIDMywrA1NCcwMS45IkU!5e0!3m2!1sen!2sin!4v1727192242268!5m2!1sen!2sin"
            className="border-[1px] border-black border-opacity-50 rounded-md w-full h-[500px] lg:h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* address and contacts  */}
        <div className="grid gap-5 lg:-order-1 lg:gap-10">
          {/* address card  */}
          <Card icon={"/images/house.svg"} title={`Registered Office Address`}>
            Mwanza, Tanzania
          </Card>

          {/* contact info card  */}
          <Card icon={"/images/phone.svg"} title={`Contact Information`}>
            Phone: +255 655 559 490 <br /> Email: sales@magestartz.com
          </Card>
        </div>
      </div>

      {/* contact form  */}
      <div className="flex justify-center px-5 my-10 lg:mt-20 lg:px-20 xl:my-40 w-full">
        {/* form  */}
        <form
          onSubmit={handleSubmit}
          className="w-full p-5 lg:p-10 xl:py-20 bg-teritiary bg-opacity-10 grid place-items-center gap-5 border-[1px] rounded-xl xl:max-w-[80%] lg:grid-cols-2"
        >
          {/* illu and heading  */}
          <div className="grid place-items-center">
            {/* illustration  */}
            <Image
              src={"/images/contact-us-llu.svg"}
              alt="contact us illustration"
              width={500}
              height={500}
              className="w-[300px] md:w-[350px]"
            />
            {/* heading  */}
            <h1 className="text-2xl font-semibold pb-3 lg:text-4xl lg:pb-6">
              Submit An <span className="text-teritiary">Enquiry</span>
            </h1>
          </div>

          {/* inputs  */}
          <div className="grid gap-5 w-full">
            {/* full name  */}
            <FormInput
              onChange={handleInputChange}
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type={"text"}
              name={"full_name"}
            />

            {/* email  */}
            <FormInput
              onChange={handleInputChange}
              label={"Email"}
              placeholder={"Enter Email"}
              type={"email"}
              name={"email"}
            />

            {/* phone  */}
            <FormInput
              onChange={handleInputChange}
              label={"Phone"}
              placeholder={"Enter Phone Number"}
              type={"tel"}
              name={"phone"}
            />

            {/* details of enquiry  */}
            <div className="grid gap-2 w-full">
              <label
                htmlFor="details"
                className="text-sm font-medium lg:text-xl"
              >
                Details of Enquiry
              </label>
              <textarea
                onChange={handleInputChange}
                placeholder={"Enter Details of Enquiry"}
                className="border-2 rounded-md p-2 w-full focus:outline-none border-teritiary border-opacity-20 focus:border-opacity-100 lg:text-lg lg:py-3 lg:px-5"
                name="details"
              />
            </div>

            {/* submit button  */}
            <div className="w-full flex justify-center">
              <button
                disabled={isBtnLoading}
                className="w-fit mt-5 lg:mt-10 bg-teritiary text-white py-2 px-10 lg:py-3 lg:px-12 lg:text-xl font-medium rounded cursor-pointer transition-all active:scale-90 disabled:active:scale-100 hover:bg-[#b92e1c]"
              >
                {isBtnLoading ? "Sending..." : "Submit Enquiry"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </seciton>
  );
};

export default ContactUs;
