import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

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

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <div className="carousel-title">
        <h1>Tech Toolkit</h1>
        <h3>Sculpting digital experiences with a wide-ranging skill set, where code and creativity flow together seamlessly.</h3>
      </div>
      <Marquee
        gradient={true}
        gradientColor="whitesmoke"
        pauseOnHover={true}
        speed={100}
      >
        {marquee1Names.map((name, index) => (
          <motion.div
            key={index}
            className='image-container'
            whileHover={{ scale: 1.2 }}
            initial='hidden'
            animate='visible'
          >
            <img
              src={`/src/assets/svg/${name}.svg`}
              alt={`svg-${index + 1}`}
              className="svg-icon"
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
      <Marquee
        gradient={true}
        gradientColor="whitesmoke"
        pauseOnHover={true}
        direction="right"
        speed={100}
      >
        {marquee2Names.map((name, index) => (
          <motion.div
            key={index}
            className='image-container'
            whileHover={{ scale: 1.2 }}
            initial='hidden'
            animate='hidden'
          >
            <img
              src={`/src/assets/svg/${name}.svg`}
              alt={`svg-${index + 1}`}
              className="svg-icon"
            />
            <p className='text-overlay'>
              {name}
            </p>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
