// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/css/App.css"

import Home from "./components/Home.jsx";
import App from "./components/App.jsx";
import About from "./components/About.jsx";
// import PageNotFound from "./components/PageNotFound.jsx";
import Post from "./components/home/Post.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorElement: <PageNotFound />,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // </StrictMode>
    <RouterProvider router={router} />
);
