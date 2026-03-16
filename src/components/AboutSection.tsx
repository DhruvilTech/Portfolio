import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MapPin, Mail, Linkedin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding max-w-5xl mx-auto">
    <SectionHeading title="About Me" />
    <div className="flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="flex-shrink-0 relative"
      >
        {/* Orbiting ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-8 rounded-full border border-accent/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Orbiting dot */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(183_100%_50%/0.8)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ top: "-8px", left: "50%", transformOrigin: "0 calc(50% + 104px)" }}
        />
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float glow-border">
          <span className="font-display text-5xl font-bold text-gradient">DD</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground leading-relaxed mb-6">
          Looking to build a career in the field of Computer Science Engineering in a growth-oriented organization
          where I can contribute to the development of the company while continuously enhancing my technical skills,
          knowledge, and professional expertise. Currently pursuing B.E. in Computer Engineering at MSU, Vadodara.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {[
            { icon: MapPin, text: "Vadodara, Gujarat, India" },
            { icon: Mail, text: "dhruvildattani9@gmail.com" },
            { icon: Linkedin, text: "LinkedIn" },
          ].map(({ icon: Icon, text }, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Icon size={16} className="text-primary" /> {text}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
