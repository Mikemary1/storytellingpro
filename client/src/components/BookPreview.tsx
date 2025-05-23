import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function BookPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Take a <span className="text-gold">Look Inside</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read the introduction and discover how storytelling transforms financial advisory relationships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="font-playfair text-3xl font-bold text-navy mb-4">Book Introduction</h3>
              <h4 className="font-playfair text-xl text-gold font-semibold mb-6 italic">
                "Explaining Money Like a Human — Transforming Jargon into Stories Clients Never Forget"
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Imagine navigating the complex world of financial advice with clarity, bypassing the technical jargon to focus on what genuinely matters to your clients. This book is your map, turning client conversations from intimidating technical discussions into journeys of understanding and connection.
              </p>
            </div>

            <motion.blockquote 
              className="bg-gold bg-opacity-10 border border-gold border-opacity-20 py-6 rounded-lg my-8 text-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-navy font-medium text-xl px-6">
                "Clients make decisions based on stories they can see themselves in, not spreadsheets they can barely decipher."
              </p>
            </motion.blockquote>

            <div className="text-center space-y-6">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <motion.button
                    className="bg-navy text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-navy-light transition-colors duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-book-reader mr-2"></i>
                    Read Full Introduction
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" aria-describedby="introduction-description">
                  <DialogHeader>
                    <DialogTitle className="font-playfair text-2xl text-navy">Introduction</DialogTitle>
                  </DialogHeader>
                  <p id="introduction-description" className="sr-only">Read the full introduction to The Art of Storytelling for Financial Advisers</p>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mt-6">
                    <h4 className="font-playfair text-xl text-gold font-semibold italic">
                      Explaining Money Like a Human — Transforming Jargon into Stories Clients Never Forget
                    </h4>
                    
                    <p>
                      Imagine navigating the complex world of financial advice with clarity, bypassing the technical jargon to focus on what genuinely matters to your clients. This book is your map, turning client conversations from intimidating technical discussions into journeys of understanding and connection.
                    </p>

                    <p>
                      Welcome to the intriguing realm of financial storytelling—a place where transformative client relationships await those ready to master the art of narrative. This guide equips both newly qualified and experienced financial advisers with the tools needed to excel beyond the numbers.
                    </p>

                    <div className="border-l-4 border-gold pl-6 bg-gold bg-opacity-5 py-4 rounded-r-lg my-8">
                      <p className="text-navy font-medium italic">
                        "Clients make decisions based on stories they can see themselves in, not spreadsheets they can barely decipher."
                      </p>
                    </div>

                    <p>
                      From ancient merchants sharing tales of trade routes to today's most successful advisers crafting compelling narratives about financial security, our inherent desire has always been to connect through story. This isn't just about explaining concepts; it's a journey towards creating understanding, trust, and a vision of a secure tomorrow that resonates on a human level.
                    </p>

                    <p>
                      For most clients, financial planning transcends the mere accumulation of wealth. It's the peace stemming from knowing their future is secure. Amidst the jargon and intricacies of financial markets, their predominant concern is not understanding every technical detail—it's the fear of making mistakes, missing opportunities, or running out of money.
                    </p>

                    <div className="bg-gold bg-opacity-10 border border-gold border-opacity-20 rounded-2xl p-6 my-8">
                      <h5 className="font-playfair text-xl font-semibold text-navy mb-4">Where the Story Truly Begins</h5>
                      <p className="text-navy italic mb-4 font-medium">Before you share your advice, listen to their story.</p>
                      <p className="text-gray-700">
                        When clients walk into your office, they often can't wait to discuss their pension options, ISAs, or money they've inherited. But in these moments, your job isn't to jump straight into the numbers — it's to help them take a breath, slow things down, and gently take control of the meeting.
                      </p>
                    </div>

                    <p>
                      Consider John, who arrived requesting "retirement planning." Rather than pulling out calculators or pension projections, I asked about his journey. It turned out John had poured 40 years into building a small manufacturing business. What the numbers couldn't reveal was that this wasn't just his livelihood, it was his community, his purpose, his very identity.
                    </p>

                    <p>
                      By hearing his story first, we designed a phased exit that protected his financial needs whilst honouring what truly mattered to him. These examples highlight why we should begin by asking about the person behind the numbers.
                    </p>

                    <div className="bg-gold bg-opacity-10 border border-gold border-opacity-20 rounded-lg py-6 my-8 text-center">
                      <p className="text-navy font-medium text-lg px-6">
                        "So, before you ever open a spreadsheet or talk about risk, open the floor to their story. Let them feel seen. Let them feel heard. That's where the best financial journeys begin."
                      </p>
                    </div>

                    <p className="text-lg font-medium text-navy">
                      Join me on this journey to master the art of financial storytelling, transforming technical expertise into your greatest asset in client relationships. Embrace clarity, connection, and the compelling power of narrative.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <motion.button
                onClick={() => scrollToSection("buy")}
                className="btn-gold text-navy font-semibold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Get Your Copy Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}