import { createBrowserRouter } from "react-router-dom";

// Root
import Root from "./Root";

// Pages
import Home from "../pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },

]);

export default routes;