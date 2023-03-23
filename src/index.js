import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";

// 페이지
import Graph from "./pages/graph";
import Main from "./pages/main";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/search", element: <div>hi</div> },
  { path: "/graph", element: <Graph /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <GlobalStyle />
  </RouterProvider>
);
