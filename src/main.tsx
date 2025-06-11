import React from 'react'
import ReactDOMClient from 'react-dom/client';

// Router
import routes from './routes/routes';
import { RouterProvider } from 'react-router-dom';

// Styles
import "./index.css";
import "./styles/tailwind.css";

const container = document.getElementById('root') as HTMLElement;

// Create the root only once
const root = ReactDOMClient.createRoot(container);

function App() {
  return (
    <RouterProvider
      router={routes} />
  );
}

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

