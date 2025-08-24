import { createBrowserRouter } from "react-router-dom";
import AppShell from "./layouts/AppShell";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Volunteers from "./pages/Volunteers";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

export default createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/events", element: <Events /> },
      { path: "/donate", element: <Donate /> },
      { path: "/volunteers", element: <Volunteers /> },
      { path: "/impact", element: <Impact /> },
      { path: "/contact", element: <Contact /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/signin", element: <SignIn /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
