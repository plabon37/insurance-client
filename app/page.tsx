import Hero from "@/components/home/Hero";
import React from "react";
import InsuranceQuoteSection from "@/components/home/InsuranceQuoteSection";
import CategorySection from "@/components/home/CategorySection";
import InsuranceBannerSection from "@/components/home/InsuranceBannerSection";
import Partners from "@/components/home/Partners";
import WorkingProcess from "@/components/home/WorkingProcess";
import NewsSection from "@/components/home/NewsSection";
import MobileApp from "@/components/home/MobileApp";
import FooterCTASection from "@/components/home/FooterCTASection";
export default function HomePage() {
  return (
    <>
      <Hero />
      <InsuranceQuoteSection />
      <CategorySection />
      <InsuranceBannerSection />
      <Partners />
       <WorkingProcess />
       <NewsSection />
       <MobileApp />
       <FooterCTASection />
    </>
  );
}