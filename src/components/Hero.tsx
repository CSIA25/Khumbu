import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";
import heroBg from "@/assets/heroo.jpg";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Layer 1: The Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <img src={heroBg} alt="The peak of Ama Dablam" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Layer 2: The Content Grid */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: The Message */}
          <div className="text-white text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black font-heading tracking-tight text-shadow-strong"
            >
              Supporting Nepal's Mountain Workers.
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-xl md:text-2xl font-light text-white/80 max-w-xl text-shadow-subtle"
            >
              Sustaining Himalayan Heritage through world-class safety training and community empowerment.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                Support Our Mission
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;