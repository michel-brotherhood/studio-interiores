import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Metrics from "@/components/Metrics";
import PortfolioGrid from "@/components/PortfolioGrid";
import StoreShowcase from "@/components/StoreShowcase";
import FAQAccordion from "@/components/FAQAccordion";
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
      <StoreShowcase />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
