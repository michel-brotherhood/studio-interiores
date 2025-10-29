import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Metrics from "@/components/Metrics";
import PortfolioGrid from "@/components/PortfolioGrid";
import ProcessSteps from "@/components/ProcessSteps";
import WhyModern from "@/components/WhyModern";
import Testimonials from "@/components/Testimonials";
import StoreShowcase from "@/components/StoreShowcase";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <Hero />
      <ValueProps />
      <Metrics />
      <PortfolioGrid />
      <ProcessSteps />
      <WhyModern />
      <Testimonials />
      <StoreShowcase />
      <FAQAccordion />
      <FinalCTA />
      <Footer />
    </div>
  );
}
