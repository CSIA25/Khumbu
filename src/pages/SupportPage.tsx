import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import supportBg from "@/assets/support.jpg"; 

// --- Data from your "Long-Term Goals" slide ---
const longTermGoals = [
  "Secure $10,000 donor commitments in annual funding",
  "Develop sustainable revenue streams",
  "Create career advancement for Nepali workers",
  "Improve mountaineering safety standards",
  "Preserve Sherpa culture and heritage",
  "Support environmental conservation in the Khumbu"
];

// --- Data from your "Revenue Sources" slide ---
const otherWaysToSupport = [
    {
        title: "Corporate Partnership",
        description: "Align your brand with our mission through equipment sponsorships, corporate retreats, or co-branded CSR initiatives.",
        cta: "Become a Partner"
    },
    {
        title: "Fundraising & Events",
        description: "Participate in or sponsor our annual events and challenges, or support us through grants and foundation support.",
        cta: "Learn More"
    },
    {
        title: "Ethical Merchandise",
        description: "Purchase KCC-branded ethical gear and locally made artisan crafts to directly support our programs and community.",
        cta: "Shop Now"
    }
];

const SupportPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        {/* --- PAGE HERO --- */}
        <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 text-center text-white">
          <div className="absolute inset-0 z-0">
            <img src={supportBg} alt="Climbers helping each other ascend a snowy ridge" className="w-full h-full object-cover" />
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
              Support Our Mission
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              Your contribution directly empowers Nepal's mountain workers and helps sustain a vital Himalayan heritage.
            </p>
          </motion.div>
        </section>
        
        {/* --- THE PRIMARY GOAL: $10k GIVER --- */}
        <section className="py-24 sm:py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                        Become a Core Supporter
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Our primary goal is to establish a sustainable financial model based on <b>$10,000 annual giver contributions.</b> This core funding is critical for supporting our operations, creating opportunities for Nepali mountain workers, and achieving our long-term goals.
                    </p>
                    <Button size="lg" className="mt-8 group bg-primary text-primary-foreground text-lg py-8 px-10">
                        Commit to Annual Support
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white p-8 rounded-lg shadow-lg border"
                >
                    <h3 className="font-bold text-foreground mb-4 text-lg">Your support helps us:</h3>
                    <ul className="space-y-3">
                        {longTermGoals.map(goal => (
                            <li key={goal} className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-foreground/80">{goal}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>

        {/* --- OTHER WAYS TO GIVE --- */}
        <section className="py-24 sm:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Other Ways to Give</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        From corporate partnerships to individual donations, every contribution makes a difference.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {otherWaysToSupport.map(item => (
                        <div key={item.title} className="bg-white p-8 rounded-lg shadow-md border flex flex-col">
                            <h3 className="text-2xl font-heading font-bold text-foreground">{item.title}</h3>
                            <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
                            <Button variant="outline" className="mt-6 w-full">{item.cta}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;