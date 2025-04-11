import { ReactNode } from "react";
import SEO from "../../components/common/SEO";
import BaseLayout from "./BaseLayout";
import HeroSection from "../../components/landing/HeroSection";
import LogoGrid from "../../components/landing/LogoGrid";
import SocialProofSection from "../../components/landing/SocialProofSection";
import CTASection from "../../components/landing/CTASection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import PricingSection from "../../components/landing/PricingSection";
import FAQSection from "../../components/landing/FAQSection";

export default function Landing(): ReactNode {
 return (
  <BaseLayout>
   <SEO
    title="Put this in the global SEO config file"
    description="Put this in the global SEO config file"
    url="Put this in the global SEO config file"
   />
   <HeroSection />
   <LogoGrid />
   {/* <DemoSection /> */}
   {/* <PainSection /> */}
   <SocialProofSection />
   <CTASection />
   <FeaturesSection />
   <PricingSection />
   <FAQSection />
   <CTASection />
  </BaseLayout>
 );
}
