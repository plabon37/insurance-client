"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InsuranceBanner {
  _id: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  email: string;
  image: string;
  displayOrder: number;
  isActive: boolean;
}

export default function InsuranceBannerSection() {
  const [banner, setBanner] = useState<InsuranceBanner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBanner() {
      try {
        const res = await fetch(
          "http://localhost:3000/api/insurance-banner",
          {
            mode: "cors",
          }
        );

        const data = await res.json();

        if (data.success) {
          const activeBanner = data.data
            .filter((item: InsuranceBanner) => item.isActive)
            .sort(
              (a: InsuranceBanner, b: InsuranceBanner) =>
                a.displayOrder - b.displayOrder
            )[0];

          setBanner(activeBanner ?? null);
        }
      } catch (error) {
        console.error("Failed to load banner:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBanner();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          Loading...
        </div>
      </section>
    );
  }

  if (!banner) {
    return null;
  }

  return (
    <section className="bg-[#F8FBFF] py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[550px]">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {banner.badge}
            </span>

            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              {banner.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {banner.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={banner.buttonLink}
                className="rounded-lg bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                {banner.buttonText}
              </Link>

              <input
                type="email"
                value={banner.email}
                readOnly
                className="rounded-lg border border-gray-300 px-5 py-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}