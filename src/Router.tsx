import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { AnimalsPage } from "./pages/AnimalsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/animal",
        element: <AnimalsPage></AnimalsPage>,
      },
    ],
  },
]);
