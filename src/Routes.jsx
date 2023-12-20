import {createBrowserRouter} from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <>This is error page</>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;