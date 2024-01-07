// routes.tsx

import { RouteObject } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Unavailable from '../components/Unavailable';
import Play from '../pages/Play';

const routes: RouteObject[] = [
  {
    index: true,
    element: <LandingPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: <Project />,
          },
          {
            path: 'unavailable',
            element: <Unavailable />,
          },
        ],
      },
      {
        path: 'play',
        element: <Play />,
      },
    ],
  },
];

export default routes;