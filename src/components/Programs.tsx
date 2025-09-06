import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import programPreviewImg from "@/assets/training.jpg"; 

const Programs = () => {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Training Programs
          </h2>
          <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Learn from the Legends of the Khumbu.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our programs are designed to create the next generation of safe, skilled, and professional mountain guides. We offer a range of courses, from guided expeditions to intensive skills workshops, all taught by our world-class team of Sherpa instructors and international experts.
          </p>
          <Button size="lg" className="mt-8 group" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Right Column: Image */}
        <div className="w-full h-full min-h-[400px]">
          <img src={programPreviewImg} alt="A climber on a dramatic ice wall" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Programs;