import { RouteObject } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Play from '../pages/Play';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Project />,
      },
      {
        path: '/play',
        element: <Play />,
      },
    ],
  },
];

export default routes;