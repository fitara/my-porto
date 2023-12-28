import React, { useRef, useState } from "react";
import { FaInfoCircle, FaFileDownload } from "react-icons/fa";
import { useUser } from "../contexts/UserContext";
import BlobEffect from "../utils/BlobEffect";
import Rubber from "../utils/RubberEffect";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  createSpringAnimation,
  AnimationPositions,
} from "../utils/MagnetEffect";

const Home: React.FC = () => {
  const { userName } = useUser();

  const aboutButtonRef = useRef<HTMLButtonElement>(null);
  const resumeButtonRef = useRef<HTMLButtonElement>(null);

  const [positions, setPositions] =
    useState<
    AnimationPositions>(
    {
      about: { x: 0, y: 0 },
      resume: { x: 0, y: 0 },
    });

  const { handleMouse: handleMouseAbout, reset: resetAbout } =
    createSpringAnimation(aboutButtonRef, "about");

  const { handleMouse: handleMouseResume, reset: resetResume } =
    createSpringAnimation(resumeButtonRef, "resume");

  return (
    <section className='home-container'>
      <div className='blob-container'>
        <BlobEffect className='blob blob1' />
        <BlobEffect className='blob blob2' />
        <BlobEffect image className='blob blob-image' />
      </div>
      <div className='description-container'>
        <h1 className='greeting-text'>Hi, {userName}!</h1>
        <div className='introduction home'>
          <h2>
            I'm&nbsp;
            <Rubber text='Fitra' />
          </h2>
          <Typewriter
            options={{
              strings: ["Fullstack Developer", "Frontend Developer"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        <motion.h3 whileHover={{ scale: 1.05 }} className='description-text'>
          Specializing in frontend development with a robust fullstack
          foundation, I meticulously craft seamless and visually appealing user
          interfaces, ensuring exceptional digital experiences.
        </motion.h3>
        <div className='button-container'>
          <Link to='/about'>
            <motion.button
              ref={aboutButtonRef}
              className='button'
              onMouseMove={(e) =>
                setPositions((prev) => ({ ...prev, ...handleMouseAbout(e) }))
              }
              onMouseLeave={() => setPositions(resetAbout())}
              animate={positions.about}
            >
              <FaInfoCircle />
              About
            </motion.button>
          </Link>
          <motion.button
            ref={resumeButtonRef}
            className='button'
            onMouseMove={(e) =>
              setPositions((prev) => ({ ...prev, ...handleMouseResume(e) }))
            }
            onMouseLeave={() => setPositions(resetResume())}
            animate={positions.resume}
          >
            <FaFileDownload />
            Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Home;
