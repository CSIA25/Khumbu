import { ClipboardList, UserPlus, BookOpen, Compass } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: "Application & Preparation",
    description: "Your journey begins with a comprehensive application. Once accepted, we guide you through a rigorous preparation phase to ensure you arrive ready for the challenge."
  },
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Training with Sherpa Legends",
    description: "Learn hands-on from the world's most experienced high-altitude climbers. Our instructors impart generations of wisdom in a real-world mountain environment."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Safety & Acclimatization",
    description: "Our core philosophy is safety above all. We follow world-class medical protocols and a gradual, proven acclimatization schedule for peak performance."
  },
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: "The Confident Ascent",
    description: "Graduate with the skills, confidence, and deep respect for the mountains needed to lead."
  }
];

const OurProcess = () => {
  return (
    // --- ID ADDED HERE ---
    <section id="process" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">How We Work</h2>
          <p className="text-3xl md:text-4xl font-heading font-bold text-foreground max-w-2xl mx-auto">
            A Method Forged on the World's Highest Peaks
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-10 left-0 w-full h-px bg-border hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-12 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="hidden md:flex absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-border rounded-full items-center justify-center font-bold text-primary">
                  {index + 1}
                </div>
                <div className="relative w-20 h-20 flex items-center justify-center bg-background rounded-lg border-2 border-border mb-4">
                    <div className="text-primary">{step.icon}</div>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{index + 1}. {step.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;