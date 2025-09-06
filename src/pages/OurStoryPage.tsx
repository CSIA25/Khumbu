import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- Assets ---
import ourStoryImage from "@/assets/1.png";
import ctaBg from "@/assets/support.jpg";

const OurStoryPage = () => {
  return (
    <div className="bg-[#F8F7F4]">
      <Header />
      <main className="pt-20">

        {/* --- Section 1: Title and Intro --- */}
        <section className="pt-16 sm:pt-16 pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Our Story
              </h1>
              <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
                From a critical need for safety to a world-class institution, our history is a testament to the resilience, spirit, and legacy of the Sherpa people. This is the story of how we grew, peak by peak.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Section 2: Timeline Image (Contained and smaller) --- */}
        <section className="px-6">
          <motion.div 
            className="max-w-7xl mx-auto" // Constrains the width
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img 
              src={ourStoryImage} 
              alt="The story and timeline of the Khumbu Climbing Center" 
              className="w-full h-auto rounded-lg border border-gray-200 shadow-lg" // Added border and shadow
            />
          </motion.div>
        </section>

        {/* --- Section 3: Founder's Quote --- */}
        <section className="py-24 sm:pt-32 sm:pb-24">
            <div className="max-w-5xl mx-auto px-6">
                 <motion.div 
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <Quote className="w-12 h-12 text-primary/20 mx-auto" />
                    <blockquote className="mt-4 text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
                        “To increase the safety margin of Nepali climbers and high altitude workers by encouraging responsible climbing practices in a supportive and community-based program.”
                    </blockquote>
                    <footer className="mt-6">
                        <p className="text-lg font-bold text-gray-900">Conrad Anker</p>
                        <p className="text-sm text-gray-500">Founding Member & Advisory Board</p>
                    </footer>
                </motion.div>
            </div>
        </section>

        {/* --- Section 4: CTA (Full Width) --- */}
        <section className="relative py-32 sm:py-40 text-white text-center">
           <div className="absolute inset-0 z-0 bg-black">
            <img src={ctaBg} alt="Climbers helping each other ascend" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-black text-shadow-strong">
                Become Part of Our Story
              </h2>
              <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-shadow-subtle">
                Your support helps us write the next chapter. By contributing to the KCC, you empower the next generation of Himalayan leaders and help sustain a vital cultural legacy.
              </p>
              <div className="mt-10">
                 <Button size="xl" className="group" asChild>
                    <Link to="/support">
                        Support Our Legacy
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default OurStoryPage;