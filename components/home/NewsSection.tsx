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
      "http://localhost:3000/api/news",
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!data.success || data.data.length === 0) {
      return null;
    }

    const section = data.data.find(
      (item: News) => item.isActive
    );

    if (!section) return null;

    section.newsItems = section.newsItems
      .filter((item) => item.isActive)
      .sort(
        (a, b) => a.displayOrder - b.displayOrder
      );

    return section;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function NewsSection() {
  const news = await getNews();

  if (!news) return null;

  return <NewsSectionClient news={news} />;
}