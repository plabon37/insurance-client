import HeroSlider from "./HeroSlider";

export default async function Hero() {
  const res = await fetch("http://localhost:3000/api/hero", {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const result = await res.json();

  const heroes = result.data.filter((item: any) => item.isActive);

  if (!heroes.length) return null;

  return <HeroSlider heroes={heroes} />;
}