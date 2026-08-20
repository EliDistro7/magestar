import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

// card component
const Card = ({ icon, title, children }) => {
  return (
    <div className="grid gap-3 place-items-center p-5 bg-accent/10 rounded-2xl md:gap-5">
      {/* icon + title */}
      <div className="grid gap-3 place-items-center">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
          className="w-20 opacity-70"
        />
        <h1 className="font-heading text-accent text-2xl opacity-70 text-center lg:text-3xl max-w-[300px]">
          {title}
        </h1>
      </div>

      {/* value */}
      <p className="text-lg text-center lg:text-xl text-text-body">{children}</p>
    </div>
  );
};

// input component
const FormInput = ({ label, placeholder, type, onChange, name }) => {
  return (
    <div className="grid gap-2 w-full">
      <label htmlFor={label} className="text-sm font-medium text-text-body lg:text-xl">
        {label}
      </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="
          border-2 rounded-md p-2 w-full
          border-accent/20
          text-text-body placeholder:text-text-light
          focus:outline-none focus:border-accent
          transition-colors duration-200
          lg:text-lg lg:py-3 lg:px-5
        "
        type={type}
        name={name}
      />
    </div>
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
    if (!formData.full_name || !formData.email || !formData.phone || !formData.details) {
      toast.error("Please fill in all the fields");
      return false;
    }
    const phoneRegex = /^\+?[0-9]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setBtnLoading(true);
    toast.loading("Sending your enquiry...");

    fetch("/api/send-contact-us-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      .catch((err) => console.log(err));
  };

  return (
    <section className="min-h-screen">
      {/* hero banner */}
      <div
        style={{ backgroundImage: "url('/images/contact-bg.webp')" }}
        className="h-[40vh] bg-cover bg-no-repeat bg-center"
      >
        <div className="blue-overlay h-full w-full p-6 md:px-20 lg:px-32 xl:px-40 grid content-center gap-5 lg:gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-secondary">
            Contact Us
          </h1>
          {/* orange accent rule */}
          <div className="w-12 h-[3px] bg-accent" />
          <p className="text-lg md:text-xl lg:text-2xl text-muted">
            Reach Out, We&#39;re Here to Help!
          </p>
        </div>
      </div>

      {/* map + info cards */}
      <div className="mt-5 px-5 md:px-10 xl:px-20 lg:mt-10 xl:mt-20 grid gap-5 lg:gap-10 lg:grid-cols-[30%,1fr]">
        {/* map */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.016784767895!2d32.89794447496887!3d-2.5013535974772365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMzAnMDQuOSJTIDMywrA1NCcwMS45IkU!5e0!3m2!1sen!2sin!4v1727192242268!5m2!1sen!2sin"
            className="border border-primary/30 rounded-md w-full h-[500px] lg:h-full shadow-brand"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* address + contact cards */}
        <div className="grid gap-5 lg:-order-1 lg:gap-10">
          <Card icon={"/images/house.svg"} title="Registered Office Address">
            Mwanza, Tanzania
          </Card>
          <Card icon={"/images/phone.svg"} title="Contact Information">
            Phone: +255 655 559 490 <br /> Email: sales@magestartz.com
          </Card>
        </div>
      </div>

      {/* enquiry form */}
      <div className="flex justify-center px-5 my-10 lg:mt-20 lg:px-20 xl:my-40 w-full">
        <form
          onSubmit={handleSubmit}
          className="
            w-full p-5 lg:p-10 xl:py-20
            bg-accent/5 border border-accent/20
            grid place-items-center gap-5
            rounded-xl xl:max-w-[80%] lg:grid-cols-2
            shadow-brand
          "
        >
          {/* illustration + heading */}
          <div className="grid place-items-center">
            <Image
              src={"/images/contact-us-llu.svg"}
              alt="contact us illustration"
              width={500}
              height={500}
              className="w-[300px] md:w-[350px]"
            />
            <h1 className="text-2xl font-semibold text-text-body pb-3 lg:text-4xl lg:pb-6">
              Submit An{" "}
              <span className="text-accent">Enquiry</span>
            </h1>
          </div>

          {/* inputs */}
          <div className="grid gap-5 w-full">
            <FormInput onChange={handleInputChange} label="Full Name"          placeholder="Enter Full Name"          type="text"  name="full_name" />
            <FormInput onChange={handleInputChange} label="Email"              placeholder="Enter Email"              type="email" name="email"     />
            <FormInput onChange={handleInputChange} label="Phone"              placeholder="Enter Phone Number"       type="tel"   name="phone"     />

            {/* textarea */}
            <div className="grid gap-2 w-full">
              <label htmlFor="details" className="text-sm font-medium text-text-body lg:text-xl">
                Details of Enquiry
              </label>
              <textarea
                onChange={handleInputChange}
                placeholder="Enter Details of Enquiry"
                className="
                  border-2 rounded-md p-2 w-full
                  border-accent/20
                  text-text-body placeholder:text-text-light
                  focus:outline-none focus:border-accent
                  transition-colors duration-200
                  lg:text-lg lg:py-3 lg:px-5
                "
                name="details"
              />
            </div>

            {/* submit */}
            <div className="w-full flex justify-center">
              <button
                disabled={isBtnLoading}
                className="
                  w-fit mt-5 lg:mt-10
                  bg-accent text-secondary
                  py-2 px-10 lg:py-3 lg:px-12 lg:text-xl
                  font-medium rounded cursor-pointer
                  transition-all duration-200
                  hover:bg-accent-hover shadow-accent-glow
                  active:scale-90 disabled:active:scale-100 disabled:opacity-60
                "
              >
                {isBtnLoading ? "Sending..." : "Submit Enquiry"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;