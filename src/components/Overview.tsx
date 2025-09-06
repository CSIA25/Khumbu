import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// --- The Curated Image Collection for the Collage ---
const imageCollage = [
  {
    src: "https://images.unsplash.com/photo-1545918204-393c233d5a5c?q=80&w=2491&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A close-up of a smiling Sherpa",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1691988001607-fda18e46113a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoZXJwYXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Students learning in a classroom setting in Nepal",
    className: "col-span-3 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&fit=crop",
    alt: "Climbers roped together on a snowy mountain",
    className: "col-span-3 row-span-3",
  },
   {
    src: "https://plus.unsplash.com/premium_photo-1692102549846-6843fd2f91b7?w=800&auto=format&fit=crop",
    alt: "A portrait of a Nepali climber",
    className: "col-span-2 row-span-3",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Overview = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Image Collage */}
        <motion.div
          className="grid grid-cols-5 grid-rows-5 gap-4 h-[500px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {imageCollage.map((img) => (
            <motion.div key={img.src} variants={itemVariants} className={`relative overflow-hidden rounded-lg ${img.className}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground">
            What have we done with your help?
          </h2>
          
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Since 2003, every contribution has gone directly into our mission: to increase the safety margin of Nepali climbers and high-altitude workers.
            </p>
            <p>
              We provide world-class training in climbing safety, rescue, first aid, and English language skills, creating sustainable livelihoods and empowering the future leaders of the Khumbu.
            </p>
            <p>
              Your support doesn't just fund a school; it sustains a legacy and protects the lives of the heroes who make Himalayan dreams a reality.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <Button size="lg" asChild>
              <a href="/support">Donate Now</a>
            </Button>
            <a href="/team" className="group text-sm font-semibold text-primary inline-flex items-center">
              <span>Meet Our Team</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Overview;