import NewsSectionClient from "./NewsSectionClient";

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

async function getNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await res.json();

    if (!data.success || !data.data?.length) {
      return null;
    }

    const section = data.data.find(
      (item: News) => item.isActive
    );

    if (!section) {
      return null;
    }

    section.newsItems = section.newsItems
      .filter((item: NewsItem) => item.isActive)
      .sort(
        (a: NewsItem, b: NewsItem) =>
          a.displayOrder - b.displayOrder
      );

    return section;
  } catch (error) {
    console.error("News fetch error:", error);
    return null;
  }
}

export default async function NewsSection() {
  const news = await getNews();

  if (!news) return null;

  return <NewsSectionClient news={news} />;
}