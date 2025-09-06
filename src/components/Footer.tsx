import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logohead.png";
import { Link } from "react-router-dom"; // Import the Link component

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Stay Connected to the Mountains
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get exclusive wisdom, training tips, and stories from our Sherpa instructors delivered to your inbox.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md bg-background h-12"
                />
                <Button size="lg" className="h-12">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Join 2,500+ mountain enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="block">
              <img src={logo} alt="Khumbu Climbing Center Logo" className="h-14 w-auto" />
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Preserving the ancient wisdom of Sherpa mountaineering while providing world-class 
              training that honors both tradition and innovation.
            </p>
            
            <div className="flex space-x-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-background hover:bg-primary/10 rounded-lg transition-colors group"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h5 className="text-lg font-heading font-bold text-foreground">Quick Links</h5>
            <ul className="space-y-3">
              {/* CORRECTED LINKS */}
              <li><Link to="/story" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Programs</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-lg font-heading font-bold text-foreground">Resources</h5>
            <ul className="space-y-3">
              {/* CORRECTED LINKS */}
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">Support Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-lg font-heading font-bold text-foreground">Contact</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                    <span>Namche Bazaar, Khumbu, Nepal</span>
                </li>
                <li className="flex items-start space-x-2">
                    <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                    <span>+977-1-234-5678</span>
                </li>
                <li className="flex items-start space-x-2">
                    <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                    <span>info@khumbuclimbingcenter.org</span>
                </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Khumbu Climbing Center. All Rights Reserved. A project dedicated to the safety and legacy of the Sherpa community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;