import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import finalCtaBg from "@/assets/support.jpg"; // The silhouette image
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section id="support" className="relative py-32 sm:py-48 text-white text-center">
       <div className="absolute inset-0 z-0">
        <img src={finalCtaBg} alt="Climbers helping each other ascend" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-shadow-strong">
            Together, we climb higher.
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-shadow-subtle">
            Support the Khumbu Climbing Center and empower Nepal's mountain communities for generations to come.
          </p>
          <div className="mt-8">
             <Button size="xl" className="group bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link to="/support">
                    Explore Ways to Give
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;