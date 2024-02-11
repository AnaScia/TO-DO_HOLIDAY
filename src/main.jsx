import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Packing from './view/Packing.jsx';
import Budget from './view/Budget.jsx';
import Blog from './view/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Packing />,
      },
      {
        path: '/budget',
        element: <Budget />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
