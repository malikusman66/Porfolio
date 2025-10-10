import { motion } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="hero-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-mono text-muted-foreground mb-4">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="gradient-text">John Doe</span>
            </motion.h1>
          </ScrollReveal>
          
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="typewriter">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  Frontend Engineer
                </h2>
              </div>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Crafting beautiful, responsive, and performant web experiences with modern technologies.
              Passionate about clean code and pixel-perfect designs.
            </motion.p>
          </ScrollReveal>
          
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-work"
                className="btn-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold inline-flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                data-testid="button-get-in-touch"
                className="px-8 py-4 border-2 border-primary rounded-lg text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get In Touch
              </Button>
            </motion.div>
          </ScrollReveal>
          
          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="text-primary text-2xl" size={32} />
          </motion.div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl"
      />
    </section>
  );
}
