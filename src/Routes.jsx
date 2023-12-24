import {createBrowserRouter} from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Dashboard from "./Layout/Dashboard";
import DashboardMain from "./Pages/Dashboard/dashboard/DashboardMain";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true, // This makes it the default child route
        element: <DashboardMain></DashboardMain>
      }
    ]
  }
]);


  export default router;