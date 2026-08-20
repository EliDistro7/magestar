import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const columns = [
    {
      label: "Shop",
      links: [
        { title: "All Products", href: "/shop/all-products" },
        { title: "Generators", href: "/shop/generators" },
        { title: "Compressors", href: "/shop/compressors" },
        { title: "Commercial Vehicles", href: "/shop/commercial-vehicles" },
      ],
    },
    {
      label: "Company",
      links: [
        { title: "Our Services", href: "/#ourservices" },
        { title: "About Us", href: "/about" },
        { title: "Contact Us", href: "/contact-us" },
        { title: "Shop", href: "/shop/all-products" },
      ],
    },
    {
      label: "Reach Us",
      links: [
        { title: "sales@magestartz.com", href: "mailto:sales@magestartz.com" },
        { title: "+255 655 559 490", href: "tel:+255655559490" },
        {
          title: "Mwanza, Tanzania",
          href: "https://www.google.com/maps/place/Magestar+company+limited",
        },
      ],
    },
    {
      label: "Follow",
      links: [
        { title: "Facebook", href: "#" },
        { title: "Twitter / X", href: "#" },
        { title: "Instagram", href: "#" },
      ],
    },
  ];

  const policyLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Refund Policy", href: "#" },
    { title: "Support", href: "#" },
    { title: "Shipping", href: "#" },
  ];

  return (
    <footer className="bg-dark text-secondary relative z-10 overflow-hidden">

      {/* ── Top rule ── */}
      <div className="w-full h-[3px] bg-accent" />

      {/* ── Links grid ── */}
      <div className="px-10 xl:px-34 pt-16 pb-12 grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4 lg:gap-x-12">
        {columns.map((col) => (
          <div key={col.label} className="flex flex-col gap-5">
            {/* Column label — spaced caps, accent rule */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-accent mb-2">
                {col.label}
              </p>
              <div className="w-6 h-[1px] bg-accent/40" />
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-2">
              {col.links.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary/50 hover:text-secondary transition-colors duration-200 leading-relaxed"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Logo divider ── */}
      <div className="relative px-10 xl:px-34 py-10">
        {/* full-bleed hairline */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-secondary/10" />

        {/* Logo centered on the hairline */}
        <div className="relative flex justify-center">
          <div className="bg-dark px-8">
            <Link href="/" className="block select-none">
              <Image
                src="/images/magesta.png"
                alt="Magestar Company Limited"
                width={220}
                height={96}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Policy links + copyright ── */}
      <div className="border-t border-secondary/10 px-10 xl:px-34 py-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Policy links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {policyLinks.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="text-[11px] tracking-wide text-secondary/35 hover:text-secondary/70 transition-colors duration-200"
            >
              {p.title}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] tracking-wide text-secondary/35 shrink-0">
          © {new Date().getFullYear()} Magestar Company Limited
        </p>
      </div>

      {/* ── Bottom accent rule ── */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
    </footer>
  );
};

export default Footer;