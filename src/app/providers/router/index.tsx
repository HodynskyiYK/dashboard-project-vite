import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layout';
import { DetailsPage } from '@/pages/details';
import { HomePage } from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'details/:id',
        element: <DetailsPage />,
      },
    ],
  },
]);
