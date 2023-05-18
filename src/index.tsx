import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ResultPage from './pages/ResultPage';
import FormPage from './pages/FormPage';
import './main.css';
import './theme/variables.css';

const router = createMemoryRouter([
  {
    path: "/",
    element: <FormPage />,
  },
  {
    path: "/results/",
    element: <ResultPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
