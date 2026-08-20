import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Shop",
      links: [
        {
          title: "Shop Parts",
          link: "/shop/all-products",
        },
        {
          title: "Generators",
          link: "/shop/generators",
        },
        {
          title: "Compressors",
          link: "/shop/compressors",
        },
        {
          title: "Commercial Vechicles",
          link: "/shop/commercial-vechicles",
        },
      ],
    },
    {
      title: "The Company",
      links: [
        {
          title: "Our Services",
          link: "/#ourservices",
        },
        {
          title: "About Us",
          link: "/about",
        },
        {
          title: "Contact Us",
          link: "/contact-us",
        },
        {
          title: "Shop",
          link: "/shop/all-products",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          title: "sales@magestartz.com",
          link: "maito:sales@magestartz.com",
        },
        {
          title: "+255 655 559 490",
          link: "tel:+255655559490",
        },
        {
          title: "Mwanza, Tanzania",
          link: "https://www.google.com/maps/place/Magestar+company+limited/@-2.5171784,32.9171436,19.54z/data=!4m15!1m8!3m7!1s0x19ce7b1e23fe9bd9:0x801a879ba2e5d93e!2sMagestar+company+limited!8m2!3d-2.5171455!4d32.9173459!10e1!16s%2Fg%2F11v3vqngw0!3m5!1s0x19ce7b1e23fe9bd9:0x801a879ba2e5d93e!8m2!3d-2.5171455!4d32.9173459!16s%2Fg%2F11v3vqngw0?hl=en-TZ&entry=ttu",
        },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          title: "Facebook",
          link: "#",
        },
        {
          title: "Twitter",
          link: "#",
        },
        {
          title: "Instagram",
          link: "#",
        },
      ],
    },
  ];

  const policyLinks = [
    {
      title: "Privacy Policy",
      link: "#",
    },
    {
      title: "Terms of Service",
      link: "#",
    },
    {
      title: "Refund Policy",
      link: "#",
    },
    {
      title: "Support Policy",
      link: "#",
    },
    {
      title: "Shipping Policy",
      link: "#",
    },
  ];

  const paymentMethods = [
    {
      icon: "/images/payment/American Express.webp",
      alt: "American Express",
    },
    {
      icon: "/images/payment/China Union Pay.webp",
      alt: "China Union Pay",
    },
    {
      icon: "/images/payment/Diners.webp",
      alt: "Diners Club",
    },
    {
      icon: "/images/payment/Discover.webp",
      alt: "Discover",
    },
    {
      icon: "/images/payment/Master Card.webp",
      alt: "MasterCard",
    },
    {
      icon: "/images/payment/Visa.webp",
      alt: "Visa",
    },
  ];

  return (
    <footer className="py-20 px-10 xl:px-34 grid divide-y-[1px] divide-secondary divide-opacity-50 lg:py-10 z-10 bg-primary relative">
      {/* first section  */}
      <div className="grid place-items-center gap-10 lg:grid-flow-col py-5">
        {/* logo  */}
        <Link
          href={"/"}
          className="flex items-center gap-x-2 select-none cursor-pointer"
        >
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={70}
            height={70}
            className="w-10"
          />
          <span className="font-bold text-2xl">MagestartZ</span>
        </Link>

        {/* links  */}
        {links.map((link, index) => (
          <div
            key={link.title}
            className="text-center grid gap-2 lg:text-start lg:gap-5"
          >
            {/* title  */}
            <p className="font-medium lg:text-lg">{link.title}</p>

            {/* links  */}
            <div className="grid gap-1">
              {link.links.map((item, index) => (
                <Link
                  key={`${link.title}_${index}`}
                  href={item.link}
                  className="text-xs lg:text-base opacity-50 hover:opacity-70"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* second section  */}
      <div className="grid text-center gap-2 py-5 lg:grid-flow-col lg:py-10 ">
        {policyLinks.map((policy, index) => (
          <Link
            key={index}
            href={policy.link}
            className="hover:opacity-70 text-xs opacity-50 lg:text-base"
          >
            {policy.title}
          </Link>
        ))}
      </div>

      {/* third section  */}
      {/* <div className="grid gap-5 py-5 lg:py-10 place-items-center lg:grid-cols-[min-content,1fr] lg:gap-10"> */}
        {/* title  */}
        {/* <p className="lg:text-lg font-medium text-nowrap">Payment Methods</p> */}
        {/* <div className="grid place-items-center gap-5 lg:grid-flow-col w-full"> */}
          {/* {paymentMethods.map((payment, index) => ( */}
            {/* // <Image */}
              {/* key={index} */}
              {/* src={payment.icon} */}
              {/* alt={payment.alt} */}
              {/* width={50} */}
              {/* height={50} */}
            {/* /> */}
          {/* ))} */}
        {/* </div> */}
      {/* </div> */}

      {/* copyright section  */}
      <div className="text-center py-5 lg:pt-10">© 2035 By MagestartZ</div>
    </footer>
  );
};

export default Footer;
