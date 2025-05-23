import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="bg-navy text-white py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">Contact Mike</h3>
            <div className="space-y-4">
              <a
                href="mailto:mike@saverbehaviour.co.uk"
                className="flex items-center hover:text-gold transition-colors"
              >
                <i className="fas fa-envelope mr-3"></i>
                mike@saverbehaviour.co.uk
              </a>
              <a
                href="https://www.linkedin.com/in/mike-legassick-manning-and-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gold transition-colors"
              >
                <i className="fab fa-linkedin mr-3"></i>
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">The Book</h3>
            <p className="text-gray-300 leading-relaxed">
              Transform your financial advisory practice through the power of storytelling and behavioural psychology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">Resources</h3>
            <div className="space-y-3">
              <a href="#" className="block hover:text-gold transition-colors">
                Sample Chapter
              </a>
              <a href="#" className="block hover:text-gold transition-colors">
                Author Interviews
              </a>
              <a href="#" className="block hover:text-gold transition-colors">
                Speaking Enquiries
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-600 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400">
            © 2025 Mike LeGassick. All rights reserved. |{" "}
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
