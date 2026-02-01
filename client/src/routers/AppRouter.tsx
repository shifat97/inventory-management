import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { Layout, Login } from '@/pages';
import { InstancePage } from '@/pages/instances';
import { CreateUser } from '@/pages/users';
import { UpdateUser } from '@/pages/users/updateUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <InstancePage />,
      },
      {
        path: 'dashboard',
        element: <div>dashboard page</div>,
      },
      {
        path: 'instances',
        element: <InstancePage />,
      },
      {
        path: 'products',
        element: <div>products page</div>,
      },
      {
        path: 'orders',
        element: <div>orders page</div>,
      },
      {
        path: 'reports',
        element: <div>reports page</div>,
      },
      {
        path: 'users',
        element: <div>users page</div>,
      },
      {
        path: 'create-user',
        element: <CreateUser />,
      },
      {
        path: 'update-user',
        element: <UpdateUser />,
      },
      {
        path: 'settings',
        element: <div>settings page</div>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
