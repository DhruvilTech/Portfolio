import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, Code2, Server, Users } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding max-w-3xl mx-auto">
    <SectionHeading title="Experience" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="glass-card p-6 glow-border relative overflow-hidden"
    >
      {/* Animated accent bar */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
          whileHover={{ rotate: 10 }}
        >
          <Briefcase size={22} className="text-primary" />
        </motion.div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-lg">Web Team Member (Backend Developer)</h3>
          <p className="text-sm text-muted-foreground">Code Vimarsh, MSU</p>
        </div>
      </div>

      <span className="inline-block text-xs font-display text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
        Jan 2026 – Present
      </span>

      <ul className="space-y-3 text-sm text-muted-foreground">
        {[
          { icon: Server, text: "Developed and maintained server-side logic and REST APIs for web applications." },
          { icon: Users, text: "Collaborated with the frontend team to integrate backend services with user interfaces." },
          { icon: Code2, text: "Implemented database operations, authentication, and efficient data handling." },
          { icon: Briefcase, text: "Contributed to improving application performance, scalability, and system reliability." },
        ].map(({ icon: Icon, text }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-start gap-2"
          >
            <Icon size={14} className="text-primary mt-1 flex-shrink-0" />
            {text}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default ExperienceSection;
