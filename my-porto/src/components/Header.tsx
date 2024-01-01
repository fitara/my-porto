import { useEffect, useState, useCallback } from "react";
import { FaHome, FaInfoCircle, FaCode, FaGamepad } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
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

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 50;
    setIsScrolled(scrollPosition > scrollThreshold);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    controls.start({ opacity: isScrolled ? 0.9 : 1 });
  }, [isScrolled, controls]);

  useEffect(() => {
    const beforeUnload = () => {
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("beforeunload", beforeUnload);

    const timeoutId = setTimeout(() => {
      if (location.pathname !== window.history.state) {
        window.scrollTo({ top: 0 });
      }
    }, 1000);

    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return (
    <div>
      <motion.header className='header' animate={controls}>
        <Link to='/' className='header-title'>
          Fit<span>.</span>
        </Link>
        <div className='tabs-wrapper'>
          {tabs.map((tab) => (
            <Link key={tab.path} to={tab.path} className='tab-button'>
              {location.pathname === tab.path && (
                <motion.span
                  layoutId='bubble'
                  className='tab-bubble'
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                    duration: 1,
                  }}
                />
              )}
              <div className='tab-icon'>
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
