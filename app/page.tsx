import Hero from "@/components/home/Hero";
import React from "react";
import InsuranceQuoteSection from "@/components/home/InsuranceQuoteSection";
import CategorySection from "@/components/home/CategorySection";
import InsuranceBannerSection from "@/components/home/InsuranceBannerSection";
export default function HomePage() {
  return (
    <>
      <Hero />
      <InsuranceQuoteSection />
      <CategorySection />
      <InsuranceBannerSection />
    </>
  );
}