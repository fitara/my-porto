import { motion, useIsPresent } from "framer-motion";

interface ScreenProps {
  className: string;
  delay: number;
}

const AnimatedScreen: React.FC<ScreenProps> = (props) => {
  const isPresent = useIsPresent();

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: {
          duration: 0.8,
          ease: "circOut",
          delay: props.delay
        }
      }}
      exit={{
        scaleX: 1,
        transition: {
          duration: 0.8,
          ease: "circIn",
          delay: props.delay
        }
      }}
      style={{ originX: isPresent ? 0 : 1 }}
      className={props.className}
    />
  );
};

const Transitions: React.FC = () => (
  <div>
    <AnimatedScreen className="first-screen" delay={0} />
    <AnimatedScreen className="second-screen" delay={0.1} />
    <AnimatedScreen className="third-screen" delay={0.2} />
  </div>
);

export default Transitions;
