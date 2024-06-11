import { RouterProvider } from "react-router-dom";
import "./sass/App.scss";
import { router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
