import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMike() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white text-navy" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/attached_assets/YU6E6115.JPG"
              alt="Mike LeGassick professional headshot"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-navy">
              About <span className="text-gold">Mike</span>
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-6 text-xl">
                Mike LeGassick is a UK-based financial life planner and behavioural investment coach with over 30 years of experience. He helps clients focus on what really matters — not just money, but peace of mind.
              </p>
              <p className="mb-6">
                Mike specialises in simplifying complex financial concepts using stories and analogies that clients remember and relate to. His approach transforms the traditional adviser-client relationship into meaningful conversations about life, values, and financial well-being.
              </p>
              <p>
                With decades of experience in financial planning and a deep understanding of behavioural psychology, Mike has developed a unique methodology that helps advisers communicate more effectively and build stronger client relationships.
              </p>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="mailto:mike@saverbehaviour.co.uk"
                className="text-gold hover:text-navy transition-colors"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mike-legassick-manning-and-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-navy transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
