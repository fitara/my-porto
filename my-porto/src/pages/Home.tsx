import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { Reveal } from "../utils/Reveal";
import Rubber from "../utils/RubberEffect";
import Typewriter from "typewriter-effect";
import BlobEffect from "../utils/BlobEffect";
import { motion } from "framer-motion";
import {
  FaInfoCircle,
  FaFileDownload
} from "react-icons/fa";
import {
  createSpringAnimation,
  AnimationPositions,
} from "../utils/MagnetEffect";

function Home() {
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
  
  const openLink = () => {
    const gDriveLink =
      "https://drive.google.com/file/d/1fJriFWmGTArHrGlKkj6rssU1I4rY_fCz/view";
    window.open(gDriveLink, "_blank");
  };

  return (
    <section className='home-container'>
      <div className='blob-wrapper'>
        <BlobEffect className='blob blob1' />
        <BlobEffect className='blob blob2' />
        <BlobEffect image className='blob blob-image' />
      </div>
      <div className='description-wrapper'>
        <Reveal>
          <h1 className='greeting-text'>Hi, {userName}!</h1>  
        </Reveal>
        <div className='introduction home'>
          <Reveal>
            <h2>
              I'm&nbsp;
              <Rubber text='Fitra' />
            </h2>
          </Reveal>
          <Reveal>
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Frontend Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </Reveal>
        </div>
        <Reveal>
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className='description-text'
          >
            Specializing in frontend development with a robust fullstack
            foundation, I meticulously craft seamless and visually appealing user
            interfaces, ensuring exceptional digital experiences.
          </motion.h3>
        </Reveal>
        <div className='button-wrapper'>
          <Link to='/about'>
            <motion.button
              ref={aboutButtonRef}
              className='button'
              onMouseMove={(e) =>
                setPositions((prev) => ({
                  ...prev,
                  ...handleMouseAbout(e)
                }))
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
              setPositions((prev) => ({
                ...prev,
                ...handleMouseResume(e)
              }))
            }
            onMouseLeave={() => setPositions(resetResume())}
            onClick={openLink}
            animate={positions.resume}
          >
            <FaFileDownload />
            Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Home;
