import FooterCTASectionClient from "./FooterCTASectionClient";

async function getFooterCTA() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/footer-cta",
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!data.success || !data.data.length) {
      return null;
    }

    const activeFooter = data.data.find(
      (item: any) => item.isActive
    );

    return activeFooter || data.data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function FooterCTASection() {
  const footerCTA = await getFooterCTA();

  if (!footerCTA) return null;

  return (
    <FooterCTASectionClient
      footerCTA={footerCTA}
    />
  );
}