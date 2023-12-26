// Layout.tsx
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        <Outlet />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
