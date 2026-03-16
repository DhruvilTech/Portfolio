import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
  </motion.div>
);

export default SectionHeading;
