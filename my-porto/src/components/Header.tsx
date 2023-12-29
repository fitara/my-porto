import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaInfoCircle, FaCode, FaGamepad } from "react-icons/fa";
import Transitions from "../utils/Transition";

const tabs = [
  { path: "/home", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaInfoCircle /> },
  { path: "/projects", label: "Projects", icon: <FaCode /> },
  { path: "/playground", label: "Playground", icon: <FaGamepad /> },
];

function Header() {
  const location = useLocation();

  return (
    <div>
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
              <div className="tab-icon">
                {tab.icon}
                {tab.label}
              </div>
            </Link>
          ))}
        </div>
      </header>
      <Transitions />
    </div>
  );
}

export default Header;
