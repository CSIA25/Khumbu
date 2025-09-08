import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Quote } from "lucide-react";
import conradAnkerPortrait from "@/assets/conrad-anker.jpg";
import conradAnkerAction from "@/assets/ca.jpg";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};

const OurTeam = () => {
  return (
    <section id="team" className="py-24 sm:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: The "Why" and CTA */}
          <motion.div 
            className="text-left"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Our Leadership
            </h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              A partnership of local legends and international experts.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our organization is guided by a world-class team, from our Executive Committee of Sherpa leaders in the Khumbu to our international Advisory Board. Together, we ensure our programs meet the highest global standards while remaining deeply rooted in local culture and needs.
            </p>
            <Button size="lg" className="mt-8 group" asChild>
              <a href="/team">
                Meet the Full Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Right Column: Conrad Anker Spotlight with Dual Images */}
          <motion.div 
            className="relative h-[500px]"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* The Main Portrait Image */}
            <div className="absolute top-0 right-0 w-[65%] h-[80%]">
              <img 
                src={conradAnkerPortrait} 
                alt="Conrad Anker Portrait" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* The SECOND, smaller "action" image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[50%]">
                 <img 
                    src={conradAnkerAction} 
                    alt="Conrad Anker teaching in the Khumbu" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-secondary/30"
                />
            </div>
            
            {/* The Overlapping Quote Card with the REAL QUOTE */}
            <div className="absolute -bottom-16 right-0 w-[70%] transform translate-y-1/2 lg:translate-y-0 lg:-bottom-12 lg:-right-12">
                <div className="bg-white p-6 rounded-lg shadow-2xl border">
                    <Quote className="w-8 h-8 text-primary/30 mb-2" />
                    <blockquote className="text-base text-muted-foreground italic">
                      "Climbers who not only know what they are doing, but enjoy doing it, are more engaged—and that makes them safer in the mountains."
                    </blockquote>
                    <footer className="mt-4 text-right">
                        <p className="font-bold text-foreground">- Conrad Anker</p>
                        <p className="text-sm text-muted-foreground">National Geographic, 2012</p>
                    </footer>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;