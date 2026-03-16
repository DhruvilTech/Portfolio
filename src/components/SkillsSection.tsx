import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  Code2, Database, Globe, Terminal, Cpu, Users, MessageSquare, Clock, Lightbulb, Eye, Puzzle, Heart, Server, Layers,
} from "lucide-react";

const techSkills = [
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "React", icon: Layers },
  { name: "MongoDB", icon: Database },
  { name: "C / C++", icon: Cpu },
  { name: "Python", icon: Terminal },
  { name: "Django", icon: Globe },
  { name: "Java", icon: Code2 },
  { name: "DBMS", icon: Database },
];

const softSkills = [
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Heart },
  { name: "Detail Oriented", icon: Eye },
  { name: "Time Management", icon: Clock },
  { name: "Problem Solving", icon: Puzzle },
  { name: "Creative", icon: Lightbulb },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const SkillCard = ({ skill }: { skill: { name: string; icon: React.ElementType } }) => (
  <motion.div
    variants={item}
    whileHover={{ scale: 1.1, y: -6, rotateZ: 2 }}
    whileTap={{ scale: 0.95 }}
    className="glass-card p-4 flex flex-col items-center gap-2 glow-border cursor-default group relative overflow-hidden"
  >
    {/* Hover glow */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <skill.icon size={24} className="text-primary group-hover:text-accent transition-colors duration-300 relative z-10" />
    <span className="text-sm font-display text-foreground relative z-10">{skill.name}</span>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-5xl mx-auto">
    <SectionHeading title="Skills" subtitle="Technologies & soft skills I work with" />

    <h3 className="font-display text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12"
    >
      {techSkills.map((s) => <SkillCard key={s.name} skill={s} />)}
    </motion.div>

    <h3 className="font-display text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
    >
      {softSkills.map((s) => <SkillCard key={s.name} skill={s} />)}
    </motion.div>
  </section>
);

export default SkillsSection;
