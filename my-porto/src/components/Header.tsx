import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FaHome, FaInfoCircle, FaCode, FaGamepad } from "react-icons/fa";
import Transitions from "../utils/Transition";

const tabs = [
  { path: "/home", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaInfoCircle /> },
  { path: "/projects", label: "Projects", icon: <FaCode /> },
  { path: "/play", label: "Play", icon: <FaGamepad /> },
];

function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: isScrolled ? 0.9 : 1 });
  }, [isScrolled, controls]);

  return (
    <div>
      <motion.header className="header" animate={controls}>
        <Link to="/" className="header-title">
          Fit<span>.</span>
        </Link>
        <div className="tabs-wrapper">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`tab-button ${
                location.pathname === tab.path ? "active" : "hover"
              }`}
            >
              {location.pathname === tab.path && (
                <motion.span
                  layoutId="bubble"
                  className="tab-bubble"
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                    duration: 1,
                  }}
                />
              )}
              <div className="tab-icon">
                {tab.icon}
                {tab.label}
              </div>
            </Link>
          ))}
        </div>
      </motion.header>
      <Transitions />
    </div>
  );
}

export default Header;