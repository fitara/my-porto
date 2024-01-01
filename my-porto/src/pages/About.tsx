import { useRef, useState } from "react";
import Carousel from "../components/Carousel";
import Certificate from "../components/Certificate";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import Rubber from "../utils/RubberEffect";
import { Reveal } from "../utils/Reveal";
import {
  createSpringAnimation,
  AnimationPositions,
} from "../utils/MagnetEffect";

function About() {
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedInRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  const [positions, setPositions] =
    useState<AnimationPositions>
    ({
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
    <section className='about-container'>
      <article className='about-person'>
        <Reveal>
          <div className='about-name'>
            <h1>
              <Rubber text='Fitra' className='dark' />
            </h1>
            <span className='dot'>&reg;</span>
            <h2>he/him</h2>
          </div>
        </Reveal>

        <Reveal>
          <motion.p whileHover={{ scale: 1.05 }} className='about-description'>
            I'm a Fullstack Developer based in Jakarta, Indonesia, and a
            graduate of the Hacktiv8 Fullstack JavaScript bootcamp. My journey
            has fueled a passion for creating captivating UI effects,
            animations, and dynamic user experiences.
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p whileHover={{ scale: 1.05 }} className='about-description'>
            With a distinctive fusion of creative flair and technical
            proficiency, I excel in delivering top-notch projects. Beyond
            coding, my interests extend to outdoor activities, travel,
            photography, movies, and immersive engagement with podcasts.
          </motion.p>
        </Reveal>

        <Reveal>
          <motion.p whileHover={{ scale: 1.05 }} className='about-description'>
            My professional focus spans the entire creative frontend spectrum.
            I'm eager to collaborate with positive-minded individuals on
            ambitious projects. Explore my portfolio for a seamless integration
            of code and creativity, and join me in democratizing technology for
            delightful experiences.
          </motion.p>
        </Reveal>

        <div className='about-contact'>
          <Reveal>
            <div className='about-link'>
              <h3>
                Get in touch
                <motion.span
                  whileHover={{ scaleX: 1.2, originX: 0 }}
                  style={{ display: "flex" }}
                >
                  <FaArrowRight />
                </motion.span>
              </h3>
              <div className='about-icons'>
                <motion.div
                  ref={githubRef}
                  className='about-icon'
                  onMouseMove={(e) =>
                    setPositions((prev) => ({
                      ...prev,
                      ...handleMouseGithub(e),
                    }))
                  }
                  onMouseLeave={() => setPositions(resetGihub())}
                  onClick={() => openLink("https://github.com/fitara")}
                  animate={positions.github}
                >
                  <FaGithub />
                </motion.div>
                <motion.div
                  className='about-icon'
                  ref={linkedInRef}
                  onMouseMove={(e) =>
                    setPositions((prev) => ({
                      ...prev,
                      ...handleMouseLinkedIn(e),
                    }))
                  }
                  onMouseLeave={() => setPositions(resetLinkeIn())}
                  onClick={() => openLink("https://www.linkedin.com/in/fitra11/")}
                  animate={positions.linkedIn}
                >
                  <FaLinkedin />
                </motion.div>
                <motion.div
                  className='about-icon'
                  ref={whatsappRef}
                  onMouseMove={(e) =>
                    setPositions((prev) => ({
                      ...prev,
                      ...handleMouseWhatsapp(e),
                    }))
                  }
                  onMouseLeave={() => setPositions(resetWhatsapp())}
                  onClick={() => openLink("https://wa.me/081226336116")}
                  animate={positions.whatsapp}
                >
                  <FaWhatsapp />
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <Carousel />
      
      <Certificate />

    </section>
  );
}

export default About;
