import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Sparkles } from "lucide-react";

const certificates = [
  {
    title: "Hackathon Participation – Navrachna University",
    organization: "Navrachna University",
    year: "2024",
    description: "Participated in an innovation-driven hackathon, collaborating with a team to prototype real-world tech solutions under time pressure.",
  },
  {
    title: "Hackathon Participation – Nirma University",
    organization: "Nirma University",
    year: "2024",
    description: "Built and pitched a working project in a competitive hackathon environment, sharpening problem‑solving and teamwork skills.",
  },
];

const CertificatesSection = () => (
  <section id="certificates" className="section-padding max-w-5xl mx-auto">
    <SectionHeading title="Certificates" subtitle="Hackathons and achievements" />
    <div className="grid md:grid-cols-2 gap-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 180 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="glass-card p-6 glow-border relative overflow-hidden"
        >
          <motion.div
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/10 blur-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="text-primary" size={22} />
            </div>
            <div className="text-left">
              <h3 className="font-display font-semibold text-foreground">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">
                {cert.organization} • {cert.year}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3 relative z-10">{cert.description}</p>
          <div className="flex items-center gap-1 text-xs text-primary relative z-10">
            <Sparkles size={14} />
            <span>Certificate of participation</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CertificatesSection;
