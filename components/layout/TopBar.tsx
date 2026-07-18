"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full bg-[#B5482A] text-white">
      <div className="flex min-h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-10 2xl:px-16">

        {/* Left */}
        <div className="flex flex-wrap items-center gap-4 xl:gap-8 text-sm">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xs shrink-0" />
            <span className="whitespace-nowrap">
              Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="shrink-0" />
            <span>purabiinsurance@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xs shrink-0" />
            <span>+880 1714-044146</span>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5 xl:gap-8">

          <Link
            href="#"
            className="text-sm font-medium uppercase transition hover:text-gray-200"
          >
            Client Portal
          </Link>

          <Link
            href="#"
            className="text-sm font-medium uppercase transition hover:text-gray-200"
          >
            Agent Portal
          </Link>

          <div className="flex items-center gap-2">

            {[
              FaFacebookF,
              FaTwitter,
              FaYoutube,
              FaInstagram,
              FaLinkedinIn,
            ].map((Icon, index) => (
              <Link
                href="#"
                key={index}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-all duration-300 hover:bg-white hover:text-[#B5482A]"
              >
                <Icon size={14} />
              </Link>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}