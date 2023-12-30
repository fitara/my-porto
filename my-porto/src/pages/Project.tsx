import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";
import { motion } from "framer-motion";
import projects from "../data/projects.json"

const Project: React.FC = () => {
  return (
    <div className="project-container">
      <h1>My Code Canvas</h1>
      <h3>
        Step into the canvas of code, where I paint digital masterpieces through
        coding projects and creative endeavors.
      </h3>
      {projects.map((project, index) => (
        <motion.div
          className={`project-card ${index % 2 === 0 ? "even" : "odd"}`}
          key={index}
        >
          <div className="project-image">
            <motion.img
              src={project.image}
              alt={`Project ${index + 1}`}
              whileHover={{ x: index % 2 === 0 ? -60 : 60 }}
            />
          </div>
          <div className="project-description">
            <Reveal key={`reveal-title-${index}`}>
              <h2>{project.name}.</h2>
            </Reveal>
            <div className="project-detail">
              <Reveal key={`reveal-description-${index}`}>
                <motion.p whileHover={{ scale: 1.05 }}>
                  {project.description}
                </motion.p>
              </Reveal>
              <div className="tech-stack-wrapper">
                {project.techStack.map((tech, techIndex) => (
                  <Reveal key={`reveal-tech-${index}-${techIndex}`}>
                    <span className="tech-stack-item">{tech}</span>
                  </Reveal>
                ))}
              </div>
              <div className="project-link">
                <FaGithub />
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;
