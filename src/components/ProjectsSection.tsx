import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionHeading from "./SectionHeading";
import { Github, ExternalLink, Zap } from "lucide-react";

const projects = [
  {
    title: "HopeBank",
    tech: ["HTML", "CSS", "Node.js", "JS", "Express.js", "MongoDB"],
    description: "A platform that helps people contribute to causes like education, healthcare, animal welfare and more. Connects donors with charities, NGOs, and groups working to improve society.",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "CodeVimarsh Website",
    tech: ["HTML", "CSS", "Node.js", "JS", "Express.js", "MongoDB"],
    description: "Online platform for the MSU coding club — sharing updates, events, and learning resources. Includes an admin panel for content management.",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "AI Career Copilot",
    tech: ["HTML", "CSS", "JS", "Python", "MySQL"],
    description: "AI-powered career guidance platform helping students identify career paths, bridge skill gaps, improve resumes, and practice interviews — a 24/7 intelligent career mentor.",
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "StrikeSense",
    tech: ["React.js", "Node.js", "Python", "LightGBM", "Data Viz"],
    description: "Data-driven Impact Metric system for cricketers built during a hackathon. Analyzes performance with match context to calculate normalized Impact Scores (0–100).",
    color: "from-accent/20 to-primary/10",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-5xl mx-auto">
    <SectionHeading title="Projects" subtitle="Things I've built" />
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable
            glareMaxOpacity={0.1}
            glareBorderRadius="12px"
          >
            <div className="glass-card h-full glow-border group relative overflow-hidden">
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${p.color}`} />

              <div className="p-6">
                {/* Hover background glow */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10"
                />

                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
                    <Zap size={18} className="text-primary" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {p.tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs font-display px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 relative z-10">
                  <motion.a
                    whileHover={{ x: 2 }}
                    href="https://github.com/DhruvilTech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
