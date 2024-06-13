import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { AnimalsPage } from "./pages/AnimalsPage";
import { AnimalPage } from "./pages/AnimalPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/animals",
        element: <AnimalsPage></AnimalsPage>,
      },
      {
        path: "/animal/:animalId",
        element: <AnimalPage></AnimalPage>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
