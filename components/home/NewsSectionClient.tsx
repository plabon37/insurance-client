"use client";

import Link from "next/link";

interface NewsItem {
  image: string;
  date: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  displayOrder: number;
  isActive: boolean;
}

interface News {
  badge: string;
  heading: string;
  description: string;
  isActive: boolean;
  newsItems: NewsItem[];
}

interface Props {
  news: News;
}

export default function NewsSectionClient({
  news,
}: Props) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {news.badge}
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            {news.heading}
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            {news.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.newsItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-medium text-blue-600">
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-gray-600">
                  {item.description}
                </p>

                <Link
                  href={item.buttonLink}
                  className="mt-6 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  {item.buttonText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}