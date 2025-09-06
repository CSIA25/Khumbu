import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Impact from "@/components/Impact";
import OurTeam from "@/components/OurTeam";
import Support from "@/components/Support";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <div id="story"><Overview /></div>
        <div id="impact"><Impact /></div>
        <OurTeam />
        <Support />
        <Programs />
        <Testimonials />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;