import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";

import NotFoundPage from "../pages/not-found";
import LoginPage from "../pages/login";
import MainLayout from "../layouts/main";
import ProfilePage from "../pages/profile";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
