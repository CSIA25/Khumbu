import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import programsBg from "@/assets/programs.jpg";

// --- Data from your "Training Programs" Revenue Source ---
const programs = [
  {
    title: "Guided Climbing Expeditions",
    description: "Participate in professionally-led expeditions to the stunning peaks of the Khumbu. Our programs focus on safety, technique, and a deep respect for the mountain environment, guided by our most experienced KCC-certified instructors.",
    image: "https://plus.unsplash.com/premium_photo-1661963741928-673ed7f7c00b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xpbWJpbmclMjBFeHBlZGl0aW9ucyUyMG5lcGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Skills Workshops",
    description: "Intensive, hands-on workshops led by a combination of international experts and senior Sherpa guides. These courses cover everything from advanced ice climbing to high-altitude rescue techniques.",
    image: "https://plus.unsplash.com/premium_photo-1661895527587-8f8d3eae2a33?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGxzJTIwY2xpbWJpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Cultural Immersion Programs",
    description: "A unique blend of trekking and cultural education. Learn basic mountaineering skills while living in Phortse, engaging with the community, and understanding the rich heritage of the Sherpa people.",
    image: "https://images.unsplash.com/photo-1604460868824-f50d9cf17a2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmVwYWwlMjBjdWx0dXJlfGVufDB8fDB8fHww",
  },
  {
    title: "Virtual Training Sessions",
    description: "Prepare for your Himalayan adventure from anywhere in the world. Our online courses cover essential theory, from safety protocols and acclimatization science to expedition planning.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydHVhbCUyMHRyYWluaW5nfGVufDB8fDB8fHww",
  }
];

const ProgramsPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        {/* --- PAGE HERO --- */}
        <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 text-center text-white">
          <div className="absolute inset-0 z-0">
            <img src={programsBg} alt="Climbers on a sunlit mountain peak" className="w-full h-full object-cover" />
            {/* THE FIX: A black gradient for better text contrast and mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/40 to-black/60"></div>
          </div>
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black">
              Our Training Programs
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              World-class instruction in the heart of the Himalayas. Learn from the best, surrounded by the world's highest peaks.
            </p>
          </motion.div>
        </section>

        {/* --- PROGRAM LISTINGS --- */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {programs.map((program, index) => (
              <motion.div 
                key={program.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className={`lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <img src={program.image} alt={program.title} className="rounded-lg shadow-2xl w-full h-full object-cover aspect-[4/3]" />
                </div>
                <div className={`lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{program.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                  <Button size="lg" className="mt-6">Inquire About This Program</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;