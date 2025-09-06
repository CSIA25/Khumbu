import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

// --- The FULL, EXPANSIVE collection of images ---
const fullGalleryImages = [
  // Includes all 9 from before, plus more for a richer experience
  { src: "https://images.unsplash.com/photo-1633538027276-fc0a8dee6ef1?q=80&w=800&auto=format&fit=crop", alt: "A Sherpa guide smiling warmly" },
  { src: "https://images.unsplash.com/photo-1693030817674-31c8d701f364?q=80&w=800&auto=format&fit=crop", alt: "A lone climber overlooking a vast mountain range" },
  { src: "https://images.unsplash.com/photo-1600402808924-9c591a6dace8?q=80&w=800&auto=format&fit=crop", alt: "Climbers ascending a snowy ridge" },
  { src: "https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Climber on a rock overlooking a valley" },
  { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop", alt: "Team of climbers roped together" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", alt: "Stunning Himalayan peak at sunrise" },
  { src: "https://images.unsplash.com/photo-1668000866140-204e995de614?w=800&auto=format&fit=crop", alt: "Prayer flags with a mountain in the background" },
  { src: "https://images.unsplash.com/photo-1584758965157-3ee511509003?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Close up of a Sherpa guide" },
  { src: "https://plus.unsplash.com/premium_photo-1692102549846-6843fd2f91b7?w=800&auto=format&fit=crop", alt: "Portrait of a climber with goggles" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", alt: "Students learning in an outdoor setting" },
  { src: "https://images.unsplash.com/photo-1621091464290-48a70e17d8cb?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMHRyYWluaW5nfGVufDB8fDB8fHww", alt: "A medical training session" },
  { src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&auto=format&fit=crop", alt: "A person smiling in the mountains" },
];

const containerVariants: Variants = { /* ... */ };
const itemVariants: Variants = { /* ... */ };

const GalleryPage = () => {
    return (
        <div className="bg-background">
            <Header />
            <main className="pt-24 sm:pt-10">
                <section className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground">
                                Our Gallery
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                Explore a collection of moments from our programs, capturing the spirit of the Khumbu and the dedication of our climbers and instructors.
                            </p>
                        </div>

                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {fullGalleryImages.map((image, index) => (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                    className="relative overflow-hidden rounded-lg group aspect-[4/3]"
                                >
                                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default GalleryPage;