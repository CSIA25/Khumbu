import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import contactBg from "@/assets/contact.avif"; 

const Contact = () => {
  return (
    // The section now has an ID for navigation
    <section id="contact">
      {/* PART 1: The Cinematic Form Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={contactBg} alt="Misty mountains at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-4">
              Contact Us
            </h2>
            <p className="text-4xl md:text-5xl font-heading font-bold text-shadow-subtle">
              Start Your Journey.
            </p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed text-shadow-subtle">
              Whether you have a question about our programs, a partnership inquiry, or wish to support our mission, we are here to help.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-lg shadow-2xl border border-white/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-1">Send us a message</h3>
            <form className="space-y-4 mt-6">
              <Input placeholder="Name" className="bg-white/80 focus:bg-white" />
              <Input type="email" placeholder="Email" className="bg-white/80 focus:bg-white" />
              <Textarea placeholder="Your Message" rows={5} className="bg-white/80 focus:bg-white" />
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* PART 2: The Map & Address Section */}
      <div className="py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-3xl font-heading font-bold text-foreground">Find Us in Phortse</h3>
                <p className="text-muted-foreground leading-relaxed">Our training facility is located in the beautiful village of Phortse, Nepal, nestled deep in the heart of the Khumbu Valley.</p>
                <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Address</h4>
                            <p className="text-muted-foreground">Phortse, Khumbu Pasanglhamu, Solukhumbu, Nepal</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Email</h4>
                            <p className="text-muted-foreground">info@khumbuclimbingcenter.org</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.8282442961577!2d86.74661257566818!3d27.84581721937018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e907006d634fdf%3A0xfc064d96db88bf43!2sKCC%20(Khumbu%20Climbing%20Center)!5e0!3m2!1sen!2sus!4v1755888450842!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Khumbu Climbing Center Location"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;