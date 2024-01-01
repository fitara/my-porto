import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const marquee1Names = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "Typescript",
  "Vue",
  "React",
  "Redux",
  "Vite",
  "React Native",
  "Tailwind",
  "jQuery",
  "Framer Motion",
  "Sass",
  "Firebase",
  "Npm",
];

const marquee2Names = [
  "VSCode",
  "Github",
  "Gitlab",
  "Node Js",
  "Express Js",
  "JWT",
  "Sequelize",
  "Jest",
  "PostgreSQL",
  "MongoDB",
  "Apollo",
  "GraphQL",
  "AWS",
  "Postman",
];

function Carousel() {
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <div className='title-wrapper'>
          <Reveal>
            <h1>Tech Toolkit.</h1>
          </Reveal>
          <span className='title-line'></span>
        </div>
        <Reveal>
          <h3>
            Sculpting digital experiences with a wide-ranging skill set, where
            code and creativity flow together seamlessly.
          </h3>
        </Reveal>
      </div>
      <Marquee
        gradient={true}
        gradientColor='whitesmoke'
        pauseOnHover={true}
        speed={100}
      >
        {marquee1Names.map((name, index) => (
          <motion.div
            key={index}
            className='image-wrapper'
            whileHover={{ scale: 1.2 }}
            initial='hidden'
            animate='visible'
          >
            <img
              src={`/src/assets/svg/${name}.svg`}
              alt={`svg-${index + 1}`}
              className='svg-icon'
            />
            <motion.p
              className='text-overlay'
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.p>
          </motion.div>
        ))}
      </Marquee>
      <Marquee
        gradient={true}
        gradientColor='whitesmoke'
        pauseOnHover={true}
        direction='right'
        speed={100}
      >
        {marquee2Names.map((name, index) => (
          <motion.div
            key={index}
            className='image-wrapper'
            whileHover={{ scale: 1.2 }}
            initial='hidden'
            animate='visible'
          >
            <img
              src={`/src/assets/svg/${name}.svg`}
              alt={`svg-${index + 1}`}
              className='svg-icon'
            />
            <motion.div
              className='text-overlay'
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.div>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}

export default Carousel;
