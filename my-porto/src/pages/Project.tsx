import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";
import { motion } from "framer-motion";

interface ProjectData {
  name: string;
  description: string;
  image: string;
  techStack: string[];
}

const dummyProjects: ProjectData[] = [
  {
    name: "Dota 2 Clone",
    description:
      "The goal of this project is to replicate the appearance of the official Dota 2 landing page. The page contains information about the game, heroes, tournaments, and game updates. The project is built entirely with frontend web technologies, including HTML for structure, CSS for styling, and JavaScript for interactivity.",
    image: "src/assets/images/dota-2.png",
    techStack: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Tanameracoffee.com Clone",
    description:
      "Comprehensive project aims to replicate the Tanamera Coffee website while incorporating a full stack approach, including React for the front-end, Inline Tailwind CSS for styling, PostgreSQL for the database, Express.js for the server, and Redux for state management.",
    image: "src/assets/images/tanamera.png",
    techStack: ["React", "Tailwind", "NodeJs", "Express", "PostgreSQL"],
  },
  {
    name: "Tech News",
    description:
      "Tech News is a web application that allows users to explore a list of articles fetched from NewsAPI and view the details of each article. This app is built using React and TypeScript and styled with Ant Design, providing a user-friendly and customizable interface for reading news.",
    image: "src/assets/images/tech-news.png",
    techStack: ["React", "Typescript", "CSS"],
  },
  {
    name: "Project Finder",
    description:
      "GitHub Project Finder is a web application designed to simplify the process of exploring GitHub users and their projects. With this user-friendly platform, you can effortlessly search for a GitHub user and access their projects, making it an ideal tool for both collaboration and project discovery.",
    image: "src/assets/images/project-finder.png",
    techStack: ["React", "Typescript", "CSS"],
  },
  {
    name: "Little Lemon",
    description:
      "The Reservation App is a cutting-edge React JS application designed to provide users with a seamless and responsive experience for making reservations. The project showcases clean and bug-free coding practices, leveraging React components to create multiple views for an intuitive user interface.",
    image: "src/assets/images/little-lemon.png",
    techStack: ["React", "CSS", "Jest"],
  },
];

const Project: React.FC = () => {
  return (
    <div className="project-container">
      <h1>My Code Canvas</h1>
      <h3>
        Step into the canvas of code, where I paint digital masterpieces through
        coding projects and creative endeavors.
      </h3>
      {dummyProjects.map((project, index) => (
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
