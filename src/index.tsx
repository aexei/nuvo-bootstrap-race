import "./styles.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import NuvoPage from "./pages/nuvo";
import AboutUsPage from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/nuvo/*",
    Component: () => {
      return (
        <Routes>
          <Route path="/" element={<NuvoPage />} />
        </Routes>
      );
    }
  },
  {
    path: "/about-us",
    element: <AboutUsPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
