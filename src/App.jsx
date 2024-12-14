import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/AboutPage/About";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { useState } from "react";
import MobileNav from "./Components/MobileNav/MobileNav";
import Service from "./Pages/ServicesPage/Service";
import GetConsultant from "./Pages/GetConsultPage/GetConsultant";
import PortfolioPage from "./Pages/PortfolioPage/Portfolio";

const Layout = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="app">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      {
        path: "/Services",
        element: <Service />,
      },
      {
        path: "/Services/:id",
        element: <Service />,
      },
      {
        path: "/GetConsultancy",
        element: <GetConsultant />,
      },
      {
        path: "/Portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
