import FooterCTASectionClient from "./FooterCTASectionClient";

async function getFooterCTA() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/footer-cta`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Footer CTA");
    }

    const data = await res.json();

    if (!data.success || !data.data?.length) {
      return null;
    }

    const activeFooter =
      data.data.find((item: any) => item.isActive) || data.data[0];

    return activeFooter;
  } catch (error) {
    console.error("Footer CTA Error:", error);
    return null;
  }
}

export default async function FooterCTASection() {
  const footerCTA = await getFooterCTA();

  if (!footerCTA) return null;

  return <FooterCTASectionClient footerCTA={footerCTA} />;
}