import Header from "./Header";
import Footer from "./Footer";
// import Background from "./Background";
import { Outlet } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring
} from "framer-motion";

function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.1,
  });

  return (
    <div className="layout-container">
      <Header />
      <motion.div
        className='progress-bar'
        style={{ scaleX }} />
      <div className="main-content">
        <Outlet />
        {/* <Background /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;