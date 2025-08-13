import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Leader from "./Page/Leader/Leader";
import Board from "./Page/Board/Board";
import Service from "./Page/Service/Service";
import Contact from "./Page/Contact/Contact";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leader",
        element: <Leader />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
