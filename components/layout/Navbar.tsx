"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    dropdown: true,
  },
  {
    name: "Claims",
    href: "/claims",
    dropdown: true,
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex h-24 w-full items-center justify-between px-4 sm:px-6 lg:px-10 2xl:px-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
          <Image
  src="/images/logo.png"
  alt="Purabi Insurance"
  width={280}
  height={80}
  priority
  className="h-auto w-[150px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[280px]"
/>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-12">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className={`relative flex items-center gap-2 text-base 2xl:text-lg font-medium transition-all duration-300 hover:text-[#B5482A] ${
                  pathname === menu.href
                    ? "text-[#B5482A]"
                    : "text-gray-900"
                }`}
              >
                {menu.name}

                {menu.dropdown && (
                  <FaChevronDown className="mt-1 text-xs" />
                )}

                {pathname === menu.href && (
                  <span className="absolute -bottom-10 left-0 h-[3px] w-full rounded-full bg-[#B5482A]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <Link
              href="/quote"
              className="hidden items-center gap-3 rounded-lg bg-[#B5482A] px-9 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#9d3f24] lg:flex"
            >
              Get A Quote
              <FaArrowRight />
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="rounded-lg border p-3 lg:hidden"
            >
              <HiBars3 className="text-3xl text-[#B5482A]" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}