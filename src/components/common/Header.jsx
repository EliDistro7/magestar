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
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

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
          : "py-5 bg-dark/60 backdrop-blur-sm"
        }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center select-none shrink-0">
        <Image
          src="/images/magesta.png"
          alt="Magestar Company Limited"
          width={250}
          height={112}
          sizes="(max-width: 768px) 150px, 220px"
          className={`object-contain transition-all duration-300 ${
            scrolled ? "h-9 w-auto" : "h-12 w-auto"
          }`}
          priority
        />
      </Link>

      {/* Hamburger — mobile only */}
      <button
        className="md:hidden z-50 relative"
        onClick={() => toggleOpen()}
        aria-label="Toggle menu"
      >
        <HamburgerIcon isOpen={isOpen} toggleOpen={toggleOpen} color="white" />
      </button>

      {/* Backdrop — mobile */}
      <div
        onClick={() => toggleOpen()}
        className={`fixed inset-0 bg-dark/75 backdrop-blur-sm transition-all duration-300 z-30 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Nav drawer — mobile / inline — desktop */}
      <nav
        className={`z-40 fixed top-0 right-0 h-screen w-[80vw] max-w-xs
          flex flex-col bg-dark border-l border-accent/20
          pt-24 pb-10 px-8 gap-2
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:static md:h-auto md:w-auto md:max-w-none
          md:flex-row md:items-center md:gap-1
          md:bg-transparent md:border-none
          md:pt-0 md:pb-0 md:px-0
          md:translate-x-0`}
      >
        {/* Mobile-only nav header */}
        <div className="md:hidden absolute top-5 left-8">
          <Image
            src="/images/magesta.png"
            alt="Magestar"
            width={130}
            height={50}
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Mobile-only close hint */}
        <p className="md:hidden text-xs text-text-light tracking-widest uppercase mb-4 ml-1">
          Navigation
        </p>

        {navItems.map((item, index) => {
          const isActive =
            pathname === item.link ||
            (item.link !== "/" && pathname?.startsWith(item.link.split("#")[0]));

          return (
            <Link
              key={index}
              href={item.link}
              onClick={() => { if (isOpen) toggleOpen(); }}
              className={`relative group px-4 py-2 rounded-sm text-sm font-medium tracking-wide transition-all duration-200
                ${isActive
                  ? "text-accent"
                  : "text-secondary/80 hover:text-secondary"
                }`}
            >
              {item.title}

              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full transition-all duration-300
                  ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}`}
              />

              {/* Mobile: active left bar */}
              {isActive && (
                <span className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-accent rounded-r" />
              )}
            </Link>
          );
        })}

        {/* Mobile CTA */}
        <div className="md:hidden mt-auto">
          <div className="w-full h-px bg-secondary/10 mb-6" />
          <Link
            href="/shop"
            onClick={() => toggleOpen()}
            className="block w-full text-center bg-accent hover:bg-accent-hover text-secondary font-semibold text-sm py-3 px-6 rounded-sm transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </nav>

      {/* Desktop CTA */}
      <Link
        href="/shop"
        className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-secondary font-semibold text-sm py-2 px-5 rounded-sm transition-all duration-200 shadow-accent-glow hover:shadow-none shrink-0"
      >
        Shop Now
      </Link>
    </header>
  );
};

export default Header;