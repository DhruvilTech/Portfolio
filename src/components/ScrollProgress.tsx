import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent z-[60] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
