import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    setVisible(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full border border-primary/50 mix-blend-difference"
      animate={{
        x: pos.x - (hovering ? 20 : 12),
        y: pos.y - (hovering ? 20 : 12),
        width: hovering ? 40 : 24,
        height: hovering ? 40 : 24,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
