import { motion, Variants } from "framer-motion";

const partnerNames = [
  "The North Face",
  "Patagonia",
  "Petzl",
  "National Geographic",
  "The American Alpine Club",
  "REI",
  "Black Diamond",
  "UIAA",
];

// Duplicate the names for a seamless, infinite loop
const allPartnerNames = [...partnerNames, ...partnerNames];

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1536], // A calculated distance to ensure a smooth loop. Adjust if partner list changes.
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Controls the speed of the scroll
        ease: "linear",
      },
    },
  },
};

const Partners = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center animate-fade-in">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Trusted by the Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to partner with the world's leading outdoor brands and organizations who share our commitment to safety, education, and environmental stewardship.
          </p>
        </div>

        {/* The Marquee Container */}
        <div className="relative mt-16 w-full overflow-hidden">
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {allPartnerNames.map((name, index) => (
              <span
                key={index}
                className="flex-shrink-0 px-12 text-2xl font-heading font-semibold text-muted-foreground whitespace-nowrap transition-colors hover:text-primary"
              >
                {name}
              </span>
            ))}
          </motion.div>

          {/* Fading Edges for a cleaner look */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;