import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ARPage from './pages/ARPage';
import MallPage from './pages/MallPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'collection',
        element: <CollectionPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'ar',
        element: <ARPage />
      },
      {
        path: 'mall', // Choose a path for your mall, e.g., /mall
        element: <MallPage />
      }
    ]
  }
]);

export default router;