import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

// --- The Curated Testimonials ---
const testimonials = [
  {
    name: "Sarah Chen",
    title: "Trek Leader, Canada",
    image: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=1600&auto=format&fit=crop=face&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
    quote: "The Khumbu Climbing Center didn't just teach me to climb—they taught me to respect the mountains. The Sherpa instructors shared not only their incredible technical knowledge but also their deep spiritual connection to these sacred peaks.",
  },
  {
    name: "Marcus Rodriguez",
    title: "Mountain Guide, Argentina",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "Twenty years of guiding, and I can honestly say the training here was transformative. The blend of traditional Sherpa techniques with modern safety protocols is unmatched anywhere in the world.",
  },
  {
    name: "Dr. Emma Thompson",
    title: "Expedition Doctor, UK",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote: "The safety standards are world-class. As a medical professional, I was impressed by their comprehensive approach to high-altitude medicine and emergency protocols. You are in the safest hands here.",
  },
];

// --- Animation Variants ---
const quoteVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="py-24 sm:py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                        Our Clients Say
                    </h2>
                    <p className="text-3xl md:text-4xl font-heading font-bold text-foreground max-w-2xl mx-auto">
                        Stories of Transformation from the Summit
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* The Main Animated Quote Area */}
                    <div className="relative h-48 md:h-40">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                variants={quoteVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                            >
                                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                                <p className="text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
                                    "{activeTestimonial.quote}"
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* The Interactive Profile Selectors */}
                    <div className="mt-12 flex justify-center items-center space-x-4 md:space-x-8">
                        {testimonials.map((testimonial, index) => (
                            <button 
                                key={testimonial.name}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "text-center transition-all duration-300 ease-in-out",
                                    activeIndex === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className={cn(
                                        "w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto shadow-md transition-all duration-300 ease-in-out border-4",
                                        activeIndex === index ? "border-primary scale-110" : "border-transparent"
                                    )}
                                />
                                <p className="mt-3 text-sm font-bold">{testimonial.name}</p>
                                <p className="text-xs">{testimonial.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;