import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  { title: "B.E. Computer Engineering", place: "MSU, Vadodara", period: "2025 – Present" },
  { title: "Diploma in Computer Engineering", place: "Polytechnic, MSU", period: "2022 – 2025" },
  { title: "SSC", place: "Genious School, Manavadar", period: "March 2022" },
];

const EducationSection = () => (
  <section id="education" className="section-padding max-w-3xl mx-auto">
    <SectionHeading title="Education" />
    <div className="relative">
      {/* Animated timeline line */}
      <motion.div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px origin-top"
        style={{ background: "linear-gradient(to bottom, hsl(183 100% 50% / 0.4), hsl(270 91% 65% / 0.4), transparent)" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {education.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`relative flex items-start mb-12 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-row`}
        >
          {/* Animated dot */}
          <motion.div
            className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
            style={{ boxShadow: "0 0 15px hsl(183 100% 50% / 0.6)" }}
          />

          <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-5 glow-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 justify-start">
                <GraduationCap size={18} className="text-primary" />
                <span className="text-xs text-primary font-display">{edu.period}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground">{edu.title}</h3>
              <p className="text-sm text-muted-foreground">{edu.place}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;
