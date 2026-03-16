import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/[0.06] py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground font-display flex items-center gap-1"
      >
        Built with <Heart size={14} className="text-primary" /> by Dattani Dhruvil © 2025
      </motion.p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/DhruvilTech/" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/dhruvil-dattani-b43599317/" },
          { icon: Mail, href: "mailto:dhruvildattani9@gmail.com" },
        ].map(({ icon: Icon, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
