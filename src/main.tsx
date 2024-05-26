import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.tsx";
import "./index.css";
import CreatePanel from "./pages/CreatePanel.tsx";
import { ModifyPanel } from "./pages/ModifyPanel.tsx";
import { Toaster } from "react-hot-toast";
import { DeletePanel } from "./pages/DeletePanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new",
    element: <CreatePanel />,
  },
  {
    path: "/edit/:id",
    element: <ModifyPanel />,
  },
  {
    path: "/delete/:id",
    element: <DeletePanel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
