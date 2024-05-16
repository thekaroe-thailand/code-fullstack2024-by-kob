import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import SingIn from './pages/backoffice/SingIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SingIn />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
