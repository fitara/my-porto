import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";
import { motion, useScroll, useSpring } from "framer-motion";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <div className="layout-container">
      <Header />
        <motion.div className='progress-bar' style={{ scaleX }} />
        <div className="main-content">
          <Outlet />
          <Background />
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
