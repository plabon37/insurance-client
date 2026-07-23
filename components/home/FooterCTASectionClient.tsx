"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

interface MenuItem {
  title: string;
  link: string;
  displayOrder: number;
  isActive: boolean;
}

interface PaymentMethod {
  image: string;
  name: string;
  link: string;
  displayOrder: number;
  isActive: boolean;
}

interface FooterCTA {
  topText: string;
  heading: string;
  buttonText: string;
  buttonLink: string;

  officeTime: string;
  paymentTitle: string;

  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;

  menus: MenuItem[];
  paymentMethods: PaymentMethod[];
}

interface Props {
  footerCTA: FooterCTA;
}

export default function FooterCTASectionClient({
  footerCTA,
}: Props) {
  const menus = [...footerCTA.menus]
    .filter((item) => item.isActive)
    .sort(
      (a, b) => a.displayOrder - b.displayOrder
    );

  const payments = [...footerCTA.paymentMethods]
    .filter((item) => item.isActive)
    .sort(
      (a, b) => a.displayOrder - b.displayOrder
    );

  return (
    <footer className="bg-[#071C3C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-14 flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#0D2E5E] p-8 lg:flex-row">

          <div>
            <p className="text-sm uppercase tracking-widest text-blue-300">
              {footerCTA.topText}
            </p>

            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
              {footerCTA.heading}
            </h2>
          </div>

          <Link
            href={footerCTA.buttonLink}
            className="rounded-full bg-[#00AEEF] px-8 py-4 text-lg font-semibold transition hover:bg-cyan-400"
          >
            {footerCTA.buttonText}
          </Link>

        </div>

        <div className="grid gap-12 md:grid-cols-3">          {/* Footer Menus */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className="transition hover:text-cyan-400"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <p className="mb-6 text-gray-300">
              {footerCTA.officeTime}
            </p>

            <div className="flex gap-4">
              {footerCTA.facebook && (
                <Link
                  href={footerCTA.facebook}
                  target="_blank"
                  className="rounded-full bg-white/10 p-3 transition hover:bg-[#00AEEF]"
                >
                  <FaFacebookF />
                </Link>
              )}

              {footerCTA.twitter && (
                <Link
                  href={footerCTA.twitter}
                  target="_blank"
                  className="rounded-full bg-white/10 p-3 transition hover:bg-[#00AEEF]"
                >
                  <FaTwitter />
                </Link>
              )}

              {footerCTA.instagram && (
                <Link
                  href={footerCTA.instagram}
                  target="_blank"
                  className="rounded-full bg-white/10 p-3 transition hover:bg-[#00AEEF]"
                >
                  <FaInstagram />
                </Link>
              )}

              {footerCTA.linkedin && (
                <Link
                  href={footerCTA.linkedin}
                  target="_blank"
                  className="rounded-full bg-white/10 p-3 transition hover:bg-[#00AEEF]"
                >
                  <FaLinkedinIn />
                </Link>
              )}
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              {footerCTA.paymentTitle}
            </h3>

            <div className="flex flex-wrap gap-4">
              {payments.map((payment, index) => (
                <Link
                  key={index}
                  href={payment.link || "#"}
                  target="_blank"
                >
                  <img
                    src={payment.image}
                    alt={payment.name}
                    className="h-10 rounded bg-white p-1"
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Insurance Website. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
        