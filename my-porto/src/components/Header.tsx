import { Link, useLocation } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

const tabs = [
  { path: "/home", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/playground", label: "Playground" },
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
                  transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                />
              )}
              {tab.label}
            </Link>
          ))}
        </div>
      </header>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
}

export default Header;
