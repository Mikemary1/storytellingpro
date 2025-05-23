import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMike from "@/components/AboutMike";
import AboutBook from "@/components/AboutBook";
import BookPreview from "@/components/BookPreview";
import AICompanion from "@/components/AICompanion";
import Testimonials from "@/components/Testimonials";
import EmailSignup from "@/components/EmailSignup";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "The Art of Storytelling for Financial Advisers | Mike LeGassick";
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <AboutMike />
      <AboutBook />
      <BookPreview />
      <AICompanion />
      <Testimonials />
      <EmailSignup />
      <BuySection />
      <Footer />
    </div>
  );
}
