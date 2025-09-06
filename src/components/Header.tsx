import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- LOGO IMPORTS ---
import logoStandard from "@/assets/logo1.png";
import logoHero from "@/assets/logo.png";

// --- Navigation Links ---
const navLinks = [
  { name: "Our Story", href: "/story" },
  { name: "Impact", href: "/#impact" },
  { name: "Our Team", href: "/team" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Support Us", href: "/support" },
];

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
};

const mobileLinkContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50) };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = !isHomePage || scrolled;
  const currentLogo = isSolid ? logoStandard : logoHero;

  const handleNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (isHomePage) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // On other pages, the default Link behavior will navigate home (and be caught by the hook).
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSolid ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent text-white"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <img src={currentLogo} alt="Khumbu Climbing Center Logo" className="h-12 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavigate(e, link.href)}
                  className={cn(
                    "relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
                    isSolid ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a 
                href="/#contact" 
                onClick={(e) => handleNavigate(e, '/#contact')}
                className={cn(
                  "hidden md:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                  isSolid ? "bg-primary/10 text-primary hover:bg-primary/20" : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Contact Us
              </a>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className={cn(isSolid ? "text-foreground" : "text-white hover:bg-white/10")}>
                  <Menu />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={logoStandard} alt="Khumbu Climbing Center Logo" className="h-12 w-auto" />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X />
              </Button>
            </div>
            
            <motion.nav 
              variants={mobileLinkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navLinks.map(link => (
                <motion.div variants={mobileLinkVariants} key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavigate(e, link.href)}
                    className="text-3xl font-heading font-bold text-foreground/80 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVariants} className="pt-8 w-full max-w-xs">
                 <Button size="lg" className="w-full" asChild>
                    <a href="/#contact" onClick={(e) => handleNavigate(e, '/#contact')}>Contact Us</a>
                 </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;