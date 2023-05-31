import { useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import PATH from '@/config/routeConfig';
import Layout from '@/components/Layout';

export default function AppRoutes() {
  const element = useRoutes([
    {
      path: PATH.HOME,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return element;
}
