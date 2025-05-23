import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-backdrop py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-white font-playfair text-xl font-semibold">
            Mike LeGassick
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-gold transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-gold transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("book")}
              className="text-white hover:text-gold transition-colors duration-200"
            >
              The Book
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-gold transition-colors duration-200"
            >
              Endorsements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-gold transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          <button className="md:hidden text-white text-xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
