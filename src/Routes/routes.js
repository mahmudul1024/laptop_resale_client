import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Category from "../category/Category";
import Blog from "../Blog/Blog";
import Addproducts from "../pages/dasboard/addprodduct/AddProducts";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/addproduct",
        element: <Addproducts />,
      },
    ],
  },
]);
