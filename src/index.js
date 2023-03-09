import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/main";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/search", element: <div>hi</div> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
