import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AICompanion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy to-blue-900 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gold/10 text-gold px-4 py-2 rounded-full mb-6">
              <i className="fas fa-crown mr-2"></i>
              <span className="text-sm font-semibold">EXCLUSIVE FOR BOOK OWNERS</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-gold">Storyteller's</span> Companion
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your personal AI-powered coaching tool that helps you craft compelling financial stories, 
              practice difficult conversations, and develop your unique storytelling voice.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-brain text-gold text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Story Generator</h4>
                  <p className="text-gray-300 text-sm">
                    Input your client scenario and get personalised story suggestions based on the book's framework
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-comments text-gold text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Conversation Simulator</h4>
                  <p className="text-gray-300 text-sm">
                    Practice challenging client conversations with AI-powered role-play scenarios
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-line text-gold text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Impact Tracker</h4>
                  <p className="text-gray-300 text-sm">
                    Monitor how your storytelling skills improve client engagement and outcomes
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 border border-gold/20 rounded-xl">
              <div className="flex items-center mb-3">
                <i className="fas fa-key text-gold mr-3"></i>
                <span className="font-semibold text-white">Exclusive Access</span>
              </div>
              <p className="text-gray-300 text-sm">
                Each book includes a unique access code for The Storyteller's Companion. 
                Available 24/7, continuously updated with new scenarios and features.
              </p>
            </div>
          </motion.div>

          {/* AI Tool Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-navy text-white p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 font-semibold">The Storyteller's Companion</div>
              </div>

              {/* Chat Interface */}
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-robot text-white text-sm"></i>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">
                      Tell me about your client situation, and I'll help you craft the perfect story...
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-navy text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">
                      I have a client worried about market volatility affecting their pension
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user text-gray-600 text-sm"></i>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-robot text-white text-sm"></i>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">
                      Perfect! Here's a weathering the storm analogy that might resonate...
                    </p>
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div className="border-t p-4">
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Describe your client scenario..."
                    className="flex-1 p-2 border rounded-lg text-sm"
                    disabled
                  />
                  <button className="bg-navy text-white px-4 py-2 rounded-lg text-sm">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}