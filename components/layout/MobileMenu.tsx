"use client";

import Link from "next/link";
import { FaChevronDown, FaArrowRight, FaTimes } from "react-icons/fa";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

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

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[320px] bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-xl font-bold text-[#B5482A]">
            Menu
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col py-4">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              onClick={onClose}
              className="flex items-center justify-between border-b px-6 py-5 text-lg font-medium transition hover:bg-gray-50 hover:text-[#B5482A]"
            >
              <span>{menu.name}</span>

              {menu.dropdown && (
                <FaChevronDown className="text-sm" />
              )}
            </Link>
          ))}
        </nav>

        {/* Quote Button */}
        <div className="px-6 pt-8">
          <Link
            href="/quote"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#B5482A] py-4 text-lg font-semibold text-white transition hover:bg-[#9d3f24]"
          >
            Get A Quote
            <FaArrowRight />
          </Link>
        </div>
      </aside>
    </>
  );
}