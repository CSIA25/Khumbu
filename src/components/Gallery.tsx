import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // <-- IMPORTANT: For navigation

// --- A curated PREVIEW of the best images ---
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1633538027276-fc0a8dee6ef1?q=80&w=800&auto=format&fit=crop", alt: "A Sherpa guide smiling warmly" },
  { src: "https://images.unsplash.com/photo-1693030817674-31c8d701f364?q=80&w=800&auto=format&fit=crop", alt: "A lone climber overlooking a vast mountain range" },
  { src: "https://images.unsplash.com/photo-1600402808924-9c591a6dace8?q=80&w=800&auto=format&fit=crop", alt: "Climbers ascending a snowy ridge" },
  { src: "https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Climber on a rock overlooking a valley" },
  { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop", alt: "Team of climbers roped together" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", alt: "Stunning Himalayan peak at sunrise" },
];

const containerVariants: Variants = { /* ... */ };
const itemVariants: Variants = { /* ... */ };

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Gallery</h2>
          <p className="text-3xl md:text-4xl font-heading font-bold text-foreground max-w-2xl mx-auto">
            A Glimpse into the Khumbu Experience
          </p>
        </div>

        {/* The 3x2 Preview Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          // ... animation props
        >
          {galleryImages.map((image, index) => (
            <motion.div /* ... */ >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* --- THE NEW CTA BUTTON --- */}
        <div className="mt-16 text-center">
            <Button size="lg" className="group" asChild>
                <Link to="/gallery">
                    View Full Gallery
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;