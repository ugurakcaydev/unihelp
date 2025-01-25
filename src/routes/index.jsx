import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/not-found";
import LoginPage from "../pages/login";
import MainLayout from "../layouts/main";
import ProfilePage from "../pages/profile";
import NotificationsPage from "../pages/notifications";
import MarksPage from "../pages/marks";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";
import PostDetail from "../pages/post-details";
import SearchPage from "../pages/search";
import TestPage from "../pages/test";

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
        path: "/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/marks",
        element: <MarksPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/:fullName/status/:id",
        element: <PostDetail />,
      },
      {
        path: "/testt",
        element: <TestPage />,
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
