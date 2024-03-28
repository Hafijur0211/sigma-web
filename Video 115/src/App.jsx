import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:'/about',
      element: <About />,
    }
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
