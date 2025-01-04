import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/not-found";
import LoginPage from "../pages/login";
import MainLayout from "../layouts/main";
import ProfilePage from "../pages/profile";
import NotificationsPage from "../pages/notifications";
import MarksPage from "../pages/marks";
import ExplorePage from "../pages/explore";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectRoute>
        <LoginPage />
      </RedirectRoute>
    ),
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profile/:fullName",
        element: <ProfilePage />,
      },
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/marks",
        element: <MarksPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
