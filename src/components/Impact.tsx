import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import impactBg from "@/assets/impact.avif";

// --- Reusable Animated Counter Component (No changes needed here) ---
interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const Counter = ({ to, suffix = "", prefix = "", className = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = prefix + Math.round(value).toLocaleString() + suffix;
        },
      });
      
      return () => controls.stop();
    }
  }, [isInView, to, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
};

// --- The Main Impact Component with NEW Stats ---
const Impact = () => {
  return (
    <section id="impact" className="relative py-24 sm:py-32 bg-foreground text-white">
      <div className="absolute inset-0 z-0">
        <img src={impactBg} alt="Himalayan mountain range at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-gray/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-4">
            A Legacy of Safety & Strength
          </h2>
          <p className="text-3xl md:text-4xl font-heading font-bold max-w-3xl mx-auto">
            Our impact is measured not just in summits reached, but in lives protected and communities empowered.
          </p>
        </motion.div>

        {/* --- NEW MAIN STAT: Years of Service --- */}
        <motion.div 
          className="my-16 md:my-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-7xl md:text-9xl font-black font-heading bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
            <Counter to={20} suffix="+" />
          </div>
          <p className="text-xl md:text-2xl font-semibold text-white/90 tracking-widest uppercase">
            Years of Annual Training
          </p>
        </motion.div>

        {/* --- NEW SMALLER STATS from your documents --- */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-4xl lg:text-5xl font-bold"><Counter to={68} /></div>
            <p className="text-sm text-white/70 tracking-wider uppercase mt-1">Students Graduated (2024)</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-4xl lg:text-5xl font-bold"><Counter to={45} /></div>
            <p className="text-sm text-white/70 tracking-wider uppercase mt-1">Pairs of Boots Donated</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-4xl lg:text-5xl font-bold"><Counter to={53} /></div>
            <p className="text-sm text-white/70 tracking-wider uppercase mt-1">Elders Hosted at Annual Tea</p>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-4xl lg:text-5xl font-bold"><Counter to={2000} prefix="$" /></div>
            <p className="text-sm text-white/70 tracking-wider uppercase mt-1">Raised for Medical Kits</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;