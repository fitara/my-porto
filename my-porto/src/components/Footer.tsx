import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] = useState({
    github: { x: 0, y: 0 },
    linkedin: { x: 0, y: 0 },
    whatsapp: { x: 0, y: 0 },
  });

  const handleMouse = (
    ref: React.RefObject<HTMLDivElement>,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    icon: string
  ) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      setPositions((prevPositions) => ({
        ...prevPositions,
        [icon]: { x: middleX, y: middleY },
      }));
    }
  };

  const reset = () => {
    setPositions({
      github: { x: 0, y: 0 },
      linkedin: { x: 0, y: 0 },
      whatsapp: { x: 0, y: 0 },
    });
  };

  return (
    <footer className="footer">
      <div>
        Created by{" "}
        <span>Fitra</span> with a touch of creativity&trade;
      </div>
      <motion.div
        style={{ display: "flex", justifyContent: "space-between" }}
        onMouseLeave={reset}
      >
        <motion.div
          ref={githubRef}
          className="footer-icon"
          onMouseMove={(e) => handleMouse(githubRef, e, "github")}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.1 }}
          animate={positions.github}
        >
          <FaGithub />
        </motion.div>
        <motion.div
          className="footer-icon"
          ref={linkedinRef}
          onMouseMove={(e) => handleMouse(linkedinRef, e, "linkedin")}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.1 }}
          animate={positions.linkedin}
        >
          <FaLinkedin />
        </motion.div>
        <motion.div
          className="footer-icon"
          ref={whatsappRef}
          onMouseMove={(e) => handleMouse(whatsappRef, e, "whatsapp")}
          animate={positions.whatsapp}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.1 }}
        >
          <FaWhatsapp />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
