import HeroSlider from "./HeroSlider";

async function getHeroes() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/hero`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch heroes");
    }

    const result = await res.json();

    return result.data.filter((item: any) => item.isActive);
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export default async function Hero() {
  const heroes = await getHeroes();

  if (!heroes.length) return null;

  return <HeroSlider heroes={heroes} />;
}