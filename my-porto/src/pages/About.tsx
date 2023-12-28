import Carousel from "../components/Carousel";
import Certificate from "../components/Certificate";
import Rubber from "../utils/RubberEffect"
import { motion, useScroll, useSpring } from "framer-motion";

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001
  });

  return (
    <>
      <section className="about-container">
        <article className="about-person">
          <div className="about-name">
            <h1>
              <Rubber text="Fitra" className="dark" />
            </h1>
            <span>&reg;</span>
            <h2>he/him</h2>
          </div>
          <div>
            
          </div>
          <motion.p
            id="draggableText"
            draggable="true"
            whileHover={{scale: 1.05}}
            className="about-description"
          >
            I'm a Fullstack Developer based in Jakarta, Indonesia, and a graduate
            of the Hacktiv8 Fullstack JavaScript bootcamp. My journey has fueled a
            passion for creating captivating UI effects, animations, and dynamic
            user experiences.
          </motion.p>
          <motion.p
            whileHover={{scale: 1.05}}
            className="about-description"
          >
            With a unique blend of creativity and technical expertise, I thrive on
            delivering high-quality projects. Beyond coding, I enjoy outdoor
            activities, travel, photography, movies, and engaging with podcasts.
          </motion.p>
          <motion.p
            whileHover={{scale: 1.05}}
            className="about-description"
          >
            My professional focus spans the entire creative frontend spectrum. I'm
            eager to collaborate with positive-minded individuals on ambitious
            projects. Explore my portfolio for a seamless integration of code and
            creativity, and join me in democratizing technology for delightful
            experiences.
          </motion.p>
        </article>
        <Carousel />
        <Certificate />
        <motion.div className="progress-bar" style={{ scaleX }} />
      </section>
    </>
  );
};

export default About;
