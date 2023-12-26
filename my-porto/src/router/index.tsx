import { RouteObject } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Playground from '../pages/Playground';
import Layout from '../components/Layout';

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
        path: '/playground',
        element: <Playground />,
      },
    ],
  },
];

export default routes;