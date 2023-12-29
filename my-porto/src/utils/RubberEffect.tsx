import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

const rubberBand = (
  scaleValues: number[] = [1, 1.4, 0.75, 1.25, 0.9, 1],
  duration: number = 0.5
): TargetAndTransition => ({
  scale: scaleValues,
  transition: {
    duration: duration,
  },
});

interface RubberProps {
  text: string;
  className?: string;
}

const Rubber: React.FC<RubberProps> = ({ text, className }) => {
  return (
    <div>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          whileHover={rubberBand()}
          className={`rubber-letter ${className}`}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default Rubber;