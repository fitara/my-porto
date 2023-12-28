import { Link, useLocation } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { FaHome, FaInfoCircle, FaCode, FaGamepad } from "react-icons/fa"; // Import ikon yang diinginkan

const tabs = [
  { path: "/home", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaInfoCircle /> },
  { path: "/projects", label: "Projects", icon: <FaCode /> },
  { path: "/playground", label: "Playground", icon: <FaGamepad /> },
];

function Header() {
  const location = useLocation();
  const isPresent = useIsPresent();

  return (
    <>
      <header className="header">
        <Link to="/" className="header-title">
          Fit<span>.</span>
        </Link>
        <div className="tabs-container">
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
                  transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                />
              )}
              <div className="icon-text">
                {tab.icon}
                {tab.label}
              </div>
            </Link>
          ))}
        </div>
      </header>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="first-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut", delay: 0.1 } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn", delay: 0.1 } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="second-screen"
      />
    </>
  );
}

export default Header;
