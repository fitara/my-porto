import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Rubber from "../utils/RubberEffect";
import {
  createSpringAnimation,
  AnimationPositions
} from "../utils/MagnetEffect";

function Footer() {
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedInRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] =
    useState<AnimationPositions>(
    {
      github: { x: 0, y: 0 },
      linkedIn: { x: 0, y: 0 },
      whatsapp: { x: 0, y: 0 },
    });

  const { handleMouse: handleMouseGithub, reset: resetGihub } =
    createSpringAnimation(githubRef, "github");

  const { handleMouse: handleMouseLinkedIn, reset: resetLinkeIn } =
    createSpringAnimation(linkedInRef, "linkedIn");

  const { handleMouse: handleMouseWhatsapp, reset: resetWhatsapp } =
    createSpringAnimation(whatsappRef, "whatsapp");

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className='footer'>
      <div className='footer-tm'>
        Created by&nbsp;
        <Rubber text='Fitra' />
        &nbsp;with a touch of creativity&trade;
      </div>
      <div className="footer-icons">
        <motion.div
          ref={githubRef}
          className='footer-icon'
          onMouseMove={(e) =>
            setPositions((prev) => ({
              ...prev,
              ...handleMouseGithub(e)
            }))
          }
          onMouseLeave={() => setPositions(resetGihub())}
          onClick={() => openLink("https://github.com/fitara")}
          animate={positions.github}
        >
          <FaGithub />
        </motion.div>
        <motion.div
          className='footer-icon'
          ref={linkedInRef}
          onMouseMove={(e) =>
            setPositions((prev) => ({
              ...prev,
              ...handleMouseLinkedIn(e)
            }))
          }
          onMouseLeave={() => setPositions(resetLinkeIn())}
          onClick={() => openLink("https://linkedin.com/in/fitra11/")}
          animate={positions.linkedIn}
        >
          <FaLinkedin />
        </motion.div>
        <motion.div
          className='footer-icon'
          ref={whatsappRef}
          onMouseMove={(e) =>
            setPositions((prev) => ({
              ...prev,
              ...handleMouseWhatsapp(e)
            }))
          }
          onMouseLeave={() => setPositions(resetWhatsapp())}
          onClick={() => openLink("https://wa.me/6281226336116")}
          animate={positions.whatsapp}
        >
          <FaWhatsapp />
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
