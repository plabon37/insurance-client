import PartnersSlider from "./PartnersSlider";

export default async function Partners() {
  const res = await fetch("http://localhost:3000/api/partners", {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const result = await res.json();

  if (!result.success || !result.data.length) return null;

  const partner = result.data[0];

  const logos = partner.logos
    .filter((logo: any) => logo.isActive)
    .sort((a: any, b: any) => a.displayOrder - b.displayOrder);

  if (!logos.length) return null;

  return (
    <PartnersSlider
      heading={partner.heading}
      logos={logos}
    />
  );
}