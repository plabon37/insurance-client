import PartnersSlider from "./PartnersSlider";

async function getPartners() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/partners`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch partners");
    }

    const result = await res.json();

    if (!result.success || !result.data?.length) {
      return null;
    }

    const partner = result.data[0];

    const logos = partner.logos
      .filter((logo: any) => logo.isActive)
      .sort(
        (a: any, b: any) =>
          a.displayOrder - b.displayOrder
      );

    if (!logos.length) {
      return null;
    }

    return {
      heading: partner.heading,
      logos,
    };
  } catch (error) {
    console.error("Partners fetch error:", error);
    return null;
  }
}

export default async function Partners() {
  const partnerData = await getPartners();

  if (!partnerData) {
    return null;
  }

  return (
    <PartnersSlider
      heading={partnerData.heading}
      logos={partnerData.logos}
    />
  );
}