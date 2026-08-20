"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { useCycle } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { title: "Shop Parts", link: "/shop" },
    { title: "Our Services", link: "/#ourservices" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between relative z-50 px-5 md:px-10 lg:px-14 xl:px-28 transition-all duration-300
        ${scrolled
          ? "py-3 bg-dark/95 backdrop-blur-md shadow-brand"
          : "py-6 bg-transparent"
        }`}
    >
      {/* Logo — Magestar PNG */}
   {/* Logo */}
<Link href="/" className="flex items-center select-none cursor-pointer">
<Image
  src="/images/magesta.png"
  alt="Magestar Company Limited"
  width={250}
  height={112}
  sizes="(max-width: 768px) 170px, 250px"
  className={`object-contain transition-all duration-300
    ${scrolled ? "h-10 w-auto" : "h-14 w-auto"}`}
  priority
/>
</Link>

      {/* Hamburger — mobile only */}
      <HamburgerIcon
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        className="md:hidden"
        color="white"
      />

      {/* Backdrop */}
      <div
        onClick={toggleOpen}
        className={`${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } fixed top-0 left-0 w-screen h-screen bg-dark/70 backdrop-blur-md transition-all duration-300 z-30 lg:hidden`}
      />

      {/* Nav */}
      <nav
        className={`z-40 fixed top-0 right-0 w-[85vw] h-screen flex flex-col bg-dark border-l border-accent/20 py-16 px-8 gap-8 transition-all duration-300
          ${!isOpen ? "translate-x-[110%]" : "translate-x-[15%]"}
          md:flex-row md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:border-none md:gap-6 md:p-0`}
      >
        {/* Mobile nav logo */}
        <div className="md:hidden mb-4">
          <Image
            src="/images/magestar_clean_logo.png"
            alt="Magestar Company Limited"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </div>

        {navItems.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={index}
              href={item.link}
              onClick={() => { if (isOpen) toggleOpen(); }}
              className={`relative w-fit cursor-pointer font-medium text-base transition-all duration-300
                md:text-secondary
                ${isActive ? "text-accent" : "text-secondary/80 hover:text-accent"}
                group`}
            >
              {item.title}
              {/* Orange underline — slides in on hover, stays on active */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;