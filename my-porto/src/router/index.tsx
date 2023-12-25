import { RouteObject } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];

export default routes;
