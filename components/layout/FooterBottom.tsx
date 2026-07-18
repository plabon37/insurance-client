"use client";

import Link from "next/link";

export default function FooterBottom() {
  return (
    <footer className="border-t border-gray-200 bg-[#F9F5F2]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left lg:px-12 xl:px-20">

        {/* Left */}
        <p className="text-[17px] text-gray-700">
          Copyright ©{" "}
          <span className="font-bold text-[#B5482A]">
            360D Soul Limited
          </span>{" "}
          2025. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-[17px] text-gray-700 md:justify-end lg:gap-12">
          <Link
            href="/terms-condition"
            className="transition duration-300 hover:text-[#B5482A]"
          >
            Teams &amp; Condition
          </Link>

          <Link
            href="/privacy-policy"
            className="transition duration-300 hover:text-[#B5482A]"
          >
            Privacy &amp; Policy
          </Link>

          <Link
            href="/refund-policy"
            className="transition duration-300 hover:text-[#B5482A]"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}