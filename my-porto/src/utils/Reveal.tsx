import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
}

export const Reveal = ({ children }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div className="reveal-container">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
        className="slide-animation"
      />
    </div>
  );
};
