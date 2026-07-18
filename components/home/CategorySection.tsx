"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Category {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  displayOrder: number;
  isActive: boolean;
}

export default function CategorySection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch("http://localhost:3000/api/category", {
  mode: "cors",
});

        const data = await res.json();

        if (data.success) {
          const activeCategories = data.data
            .filter((item: Category) => item.isActive)
            .sort(
              (a: Category, b: Category) =>
                a.displayOrder - b.displayOrder
            );

          setCategories(activeCategories);
        }
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Insurance Categories
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-xl border bg-white p-5 shadow"
              >
                <div className="h-56 rounded bg-gray-200" />
                <div className="mt-4 h-6 rounded bg-gray-200" />
                <div className="mt-3 h-4 rounded bg-gray-200" />
                <div className="mt-2 h-4 rounded bg-gray-200" />
                <div className="mt-6 h-10 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Insurance Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose the insurance plan that best fits your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category._id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-gray-600">
                  {category.description}
                </p>

                <Link
                  href={category.buttonLink || "#"}
                  className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  {category.buttonText || "Learn More"}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}