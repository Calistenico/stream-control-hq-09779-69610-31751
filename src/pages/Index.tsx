import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainSolution from "@/components/PainSolution";
import ProductCards from "@/components/ProductCards";
import QualityShowcase from "@/components/QualityShowcase";
import TMDBCarousel from "@/components/TMDBCarousel";
import ServerPlans from "@/components/ServerPlans";
import AndroidApps from "@/components/AndroidApps";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <ProductCards />
        <QualityShowcase />
        <TMDBCarousel />
        <ServerPlans />
        <AndroidApps />
        <TMDBCarousel />
        <Features />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
