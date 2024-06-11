import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/animal",
        element: <Animal></Animal>,
      },
    ],
  },
]);
