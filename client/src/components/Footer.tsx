import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import saverBehaviourLogo from "@assets/ChatGPT Image Apr 4, 2025, 03_37_06 PM.png";
import radioExeBanner from "@assets/RADIO EXE.jpg";
import mindOverMarketsBook from "@assets/Top copy of book image.png";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="bg-navy text-white py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">Contact Mike</h3>
            <div className="space-y-3">
              <a
                href="mailto:mike@saverbehaviour.co.uk"
                className="flex items-center hover:text-gold transition-colors text-sm"
              >
                <i className="fas fa-envelope mr-2"></i>
                mike@saverbehaviour.co.uk
              </a>
              <a
                href="https://www.linkedin.com/in/mike-legassick-manning-and-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gold transition-colors text-sm"
              >
                <i className="fab fa-linkedin mr-2"></i>
                LinkedIn Profile
              </a>
              <a 
                href="mailto:mike@saverbehaviour.co.uk?subject=Speaking Enquiry"
                className="flex items-center hover:text-gold transition-colors text-sm"
              >
                <i className="fas fa-microphone mr-2"></i>
                Speaking Enquiries
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">The Book</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Transform your financial advisory practice through the power of storytelling and behavioural psychology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">Mind Over Markets Book</h3>
            <a 
              href="https://www.amazon.co.uk/Mind-Over-Markets-Uncovering-Comfortable/dp/1399975234"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img 
                src={mindOverMarketsBook} 
                alt="Mind Over Markets Book by Mike LeGassick"
                className="w-full max-w-[120px] h-auto rounded-lg"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">Mind Over Markets Podcast</h3>
            <a 
              href="https://www.radioexe.co.uk/podcasts/mind-over-markets/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img 
                src={radioExeBanner} 
                alt="Mind Over Markets Podcast on Radio Exe"
                className="w-full max-w-[140px] h-auto rounded-lg"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="font-playfair text-xl font-bold text-gold mb-4">Education & Training</h3>
            <a
              href="https://www.saverbehaviour.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img 
                src={saverBehaviourLogo} 
                alt="Saver Behaviour - The Psychology of Money"
                className="w-full max-w-[150px] h-auto mb-2"
              />
            </a>
            <p className="text-gray-300 text-xs">
              Financial psychology and behavioural insights platform.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-600 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
