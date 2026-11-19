import { FAQSection } from "@/components/landing/FAQSection";
import { FeaturedWork } from "@/components/landing/FeaturedWork";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingTracker } from "@/components/landing/LandingTracker";
import { PricingSection } from "@/components/landing/PricingSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { RenewalComparison } from "@/components/landing/RenewalComparison";
import { ServiceSelection } from "@/components/landing/ServiceSelection";
import { StickyInquiryBar } from "@/components/landing/StickyInquiryBar";
import { ValueSection } from "@/components/landing/ValueSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <LandingTracker />
      <Header />
      <main className="studio-main">
        <HeroSection />
        <ServiceSelection />
        <FeaturedWork />
        <RenewalComparison />
        <ValueSection />
        <PricingSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyInquiryBar />
    </>
  );
}
