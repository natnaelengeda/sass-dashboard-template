import { createBrowserRouter } from "react-router-dom";

// Root
import Root from "./Root";

// Pages
import Home from "../pages/home";

// Auth
import Login from "@/pages/auth/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      // Auth
      {
        path: '/login',
        element: <Login />
      }
    ]
  },

]);

export default routes;