import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Storytelling is a hugely undervalued skill in financial planning. Mike's approach transforms the way advisers connect with their clients, making complex financial concepts accessible and memorable.",
    author: "Robin Powell",
    role: "Financial Journalist & Author"
  },
  {
    quote: "Mike has mastered the art of making financial planning human. This book is essential reading for any adviser who wants to truly connect with their clients and drive meaningful change.",
    author: "Alan Smith",
    role: "Financial Planning Expert"
  },
  {
    quote: "The future of financial advice lies in clear communication and genuine connection. Mike's storytelling methodology provides the roadmap for building those meaningful client relationships.",
    author: "Andy Hart",
    role: "Behavioural Finance Specialist"
  },
  {
    quote: "This book bridges the gap between technical expertise and human understanding. Mike's insights will transform how advisers communicate and how clients experience financial planning.",
    author: "Ian McKenna",
    role: "Financial Technology Expert"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-gold">Experts</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Endorsements from respected voices in UK financial planning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">
                <i className="fas fa-quote-left text-gold text-3xl mb-4"></i>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
