import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bookCover from "@assets/Book cover.jpg";

export default function AboutBook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="book" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            About <span className="text-gold">the Book</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide that transforms how financial advisers communicate with their clients
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={bookCover}
                alt="The Art of Storytelling for Financial Advisers book cover"
                className="w-full max-w-sm mx-auto book-shadow rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl mb-6 leading-relaxed">
                This book shows financial advisers how to communicate complex advice clearly. Using behavioural science, stories, and analogies, it teaches advisers to build trust and help clients act with confidence — without jargon or lectures.
              </p>

              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">What You'll Learn:</h3>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mt-1 mr-3"></i>
                  <span>How to transform complex financial concepts into memorable stories</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mt-1 mr-3"></i>
                  <span>Behavioural psychology techniques for better client engagement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mt-1 mr-3"></i>
                  <span>Building trust through authentic communication</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-gold mt-1 mr-3"></i>
                  <span>Practical frameworks for client conversations</span>
                </li>
              </ul>

              <motion.button
                onClick={() => scrollToSection("buy")}
                className="btn-gold text-navy font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Get Your Copy
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
