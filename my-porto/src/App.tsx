// App.tsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import routes from './router';
import './App.css';

export default function App() {
  const element = useRoutes(routes);
  const location = useLocation();

  if (!element) return null;

  return (
    <UserProvider>
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </UserProvider>
  );
}