import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const roles = ["Backend Developer", "Full Stack Builder", "Problem Solver", "Tech Enthusiast"];

const HeroSection = () => {
  const fullName = "Dattani Dhruvil";
  const [displayed, setDisplayed] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleDisplayed, setRoleDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Name typing
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex]);

  // Role typing loop
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setRoleDisplayed(currentRole.slice(0, roleDisplayed.length + 1));
        if (roleDisplayed.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setRoleDisplayed(currentRole.slice(0, roleDisplayed.length - 1));
        if (roleDisplayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [roleDisplayed, isDeleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-[100px]"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/5 blur-[80px]"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs text-primary font-display tracking-wider uppercase">Available for opportunities</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-display text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-3">
          {displayed}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-primary"
          >
            |
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="h-8 mb-8"
        >
          <span className="text-xl md:text-2xl text-gradient font-display font-semibold">
            {roleDisplayed}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="text-accent"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          B.E. Computer Engineering student at MSU, Vadodara. Passionate about building scalable web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px -5px hsl(183 100% 50% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("projects")}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm transition-all duration-300"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "hsl(183 100% 50% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-display font-semibold text-sm hover:bg-primary/10 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
