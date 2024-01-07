import { useEffect, useState } from "react";
import projects from "../data/projects.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Project() {
  const [smallScreen, setSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="project-container">
      <h1>My Code Canvas</h1>
      <h3>
        Step into the canvas of code, where I paint digital masterpieces through
        coding projects and creative endeavors.
      </h3>
      {projects.map((project, index) => {
        const hover = {
          x: smallScreen ? 0 : index % 2 === 0 ? -60 : 60,
          translateY: smallScreen ? -20 : 0,
          rotate: smallScreen ? 4 : 0,
        };

        return (
          <motion.div
            className={`project-card ${index % 2 === 0 ? "even" : "odd"}`}
            key={index}
          >
            <div className="project-image">
              <motion.img
                src={project.image}
                alt={`Project ${index + 1}`}
                whileHover={hover}
              />
            </div>
            <div className="project-description">
              <Reveal key={`project-title-${index}`}>
                <h2>{project.name}.</h2>
              </Reveal>
              <div className="project-detail">
                <Reveal key={`project-description-${index}`}>
                  <motion.p whileHover={{ scale: 1.05 }}>
                    {project.description}
                  </motion.p>
                </Reveal>
                <div className="tech-stack-wrapper">
                  {project.techStack.map((tech, techIndex) => (
                    <Reveal key={`tech-stack-${index}-${techIndex}`}>
                      <span className="tech-stack-item">{tech}</span>
                    </Reveal>
                  ))}
                </div>
                <div className="project-link">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <Link to="/projects/unavailable">
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

export default Project;