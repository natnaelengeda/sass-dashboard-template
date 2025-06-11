import React from 'react'
import ReactDOMClient from 'react-dom/client';

// Router
import routes from './routes/routes';
import { RouterProvider } from 'react-router-dom';

// State
import { Provider } from 'react-redux';
import { persistor, store } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

// Styles
import "./index.css";
import "./styles/tailwind.css";

const container = document.getElementById('root') as HTMLElement;

// Create the root only once
const root = ReactDOMClient.createRoot(container);

function App() {
  return (
    <Provider
      store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <RouterProvider
          router={routes} />
      </PersistGate>
    </Provider>
  );
}

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

