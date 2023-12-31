import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import WhoAmI from "~/pages/whoami";
import Skills from "~/pages/skills";
import Portfolio from "~/pages/portfolio";
import Tools from "~/pages/tools";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "whoami",
        element: <WhoAmI />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
    ],
  },
]);

export default routes;
