import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "dhruvildattani9@gmail.com", href: "mailto:dhruvildattani9@gmail.com" },
  { icon: MapPin, label: "Location", value: "Vadodara, Gujarat, India" },
  { icon: Github, label: "GitHub", value: "GitHub Profile", href: "https://github.com/DhruvilTech/" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/dhruvil-dattani-b43599317/",
  },
];

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-4xl mx-auto">
    <SectionHeading title="Get In Touch" subtitle="Feel free to reach out" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contacts.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          {c.href ? (
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 glow-border group block h-full"
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <c.icon size={20} className="text-primary" />
              </motion.div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </a>
          ) : (
            <div className="glass-card p-5 flex items-center gap-4 glow-border h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm text-foreground">{c.value}</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default ContactSection;
