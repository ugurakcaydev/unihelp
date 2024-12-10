import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import NotFoundPage from "../pages/not-found";
import LoginPage from "../pages/login";
import MainLayout from "../layouts/main";

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
        path: "/:fullName",
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
