// routes.tsx

import { RouteObject } from 'react-router-dom';
import LandingPage from '../pages/LandingPage'; // Assuming LandingPage is a default export
import Layout from '../components/Layout';
import Home from '../pages/Home'; // Assuming Home is a default export
import About from '../pages/About'; // Assuming About is a default export
import Project from '../pages/Project';
import Play from '../pages/Play'; // Assuming Play is a default export
import Unavailable from '../components/Unavailable';

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