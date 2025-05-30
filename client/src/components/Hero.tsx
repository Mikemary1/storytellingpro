import { motion } from "framer-motion";
import bookCover from "@assets/book-cover-v2.jpg";

export default function Hero() {
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
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gold">The Art of Storytelling</span>
              <br />
              <span className="text-white">for Financial Advisers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Explaining Money Like a Human — Transforming Jargon into Stories Clients Never Forget
            </p>
            <p className="text-lg mb-10 text-gray-400 leading-relaxed">
              By <span className="text-gold font-semibold">Mike LeGassick</span>
            </p>
            <motion.button
              onClick={() => scrollToSection("buy")}
              className="btn-gold text-navy font-semibold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-book-open mr-2"></i>
              Buy the Book
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src={bookCover}
                alt="The Art of Storytelling for Financial Advisers book cover"
                className="w-80 h-auto book-shadow rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <i className="fas fa-chevron-down text-gold text-2xl"></i>
        </motion.div>
      </motion.div>
    </section>
  );
}
