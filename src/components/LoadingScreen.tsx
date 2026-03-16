import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 30) setPhase(1);
    if (progress > 60) setPhase(2);
    if (progress > 90) setPhase(3);
  }, [progress]);

  const letters = "DHRUVIL".split("");

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-primary/10"
              style={{ width: ring * 200, height: ring * 200 }}
              animate={{ rotate: ring % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
              transition={{ rotate: { duration: 8 * ring, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
            />
          ))}

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}

          {/* Logo letters */}
          <div className="flex gap-1 mb-8">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="font-display text-5xl md:text-6xl font-bold text-gradient"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Status text */}
          <motion.p
            className="text-xs text-muted-foreground font-display tracking-widest uppercase mb-6"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {phase === 0 && "Initializing..."}
            {phase === 1 && "Loading assets..."}
            {phase === 2 && "Compiling portfolio..."}
            {phase === 3 && "Almost ready..."}
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          <motion.p
            className="mt-3 font-display text-sm text-primary"
            key={Math.floor(progress)}
          >
            {Math.floor(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
