import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BuySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePurchase = (format: string) => {
    // Replace with actual purchase links
    if (format === "print") {
      window.open("https://amazon.co.uk", "_blank");
    } else if (format === "digital") {
      window.open("https://amazon.co.uk", "_blank");
    }
  };

  return (
    <section id="buy" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Get Your <span className="text-gold">Copy Today</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Transform your practice with the power of storytelling. Available now in print and digital formats.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-book text-gold text-4xl mb-4"></i>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Print Edition</h3>
              <p className="text-gray-600 mb-6">Premium hardcover with elegant design</p>
              <p className="text-3xl font-bold text-navy mb-6">£24.99</p>
              <motion.button
                onClick={() => handlePurchase("print")}
                className="btn-gold text-navy font-semibold py-3 px-6 rounded-lg w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Order Print Book
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-tablet-alt text-gold text-4xl mb-4"></i>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Digital Edition</h3>
              <p className="text-gray-600 mb-6">Instant download, searchable content</p>
              <p className="text-3xl font-bold text-navy mb-6">£14.99</p>
              <motion.button
                onClick={() => handlePurchase("digital")}
                className="btn-gold text-navy font-semibold py-3 px-6 rounded-lg w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download mr-2"></i>
                Download Digital
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 flex justify-center space-x-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center">
              <i className="fas fa-shipping-fast mr-2"></i>
              <span>Free UK Delivery</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt mr-2"></i>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-undo mr-2"></i>
              <span>30-Day Returns</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
